import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

import { FuncionarioService } from './funcionario.service';
import { Funcionario } from './funcionario';
import { Campus } from '../campus/campus';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  private _funcionario: Funcionario[];

  displayedColumns: string[] = ['id', 'name', 'ativo', 'edit'];
  dataSource: MatTableDataSource<Funcionario>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor(private _service: FuncionarioService, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this._funcionario);
		this._service.getFuncionarios().subscribe(result => this.dataSource.data = result);
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	rowClicked(row: any): void { console.log(row); }

	ngOnInit() { }

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
		if (this.dataSource.paginator) { this.dataSource.paginator.firstPage(); }
	}

	openDialog(): void {
		let dialogRef = this.dialog.open(ModalComponent, {
			width: '400px',
			height: '350px',
			data: {}
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
		});
	}
}

@Component({
	selector: 'app-dialog1',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css']
})
export class ModalComponent {

	private _name: string = null;
	private _nivel: number = null;
	private _campi: number = null;
	private _error: any;
	// private _curso: Curso;
	private _campus: Campus[];
	// private _niveis: Array<Nivel> = [ 
	// 	{ id: 1, nivel: 'Integrado' },
	// 	{ id: 2, nivel: 'Subsequente' },
	// 	{ id: 3, nivel: 'Superior' },
	// 	{ id: 4, nivel: 'Pós graduação' } 
	// ];

	constructor(private _service: FuncionarioService, public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: Funcionario, public snackBar: MatSnackBar) {
		this._service.getCampus().subscribe(result => this._campus = result);
	}

	save(): void {
		if (this._name &&  this._nivel, this._campi) {
			let curso = {
				id: null,
				name: this._name,
				// nivel: this._niveis[(this._nivel - 1)].nivel,
				campi: this._campi
			}
			// this._service.add(curso)
			// 	.subscribe(result => this._curso = result, error => this._error = error);
			this.snackBar.open('ok', 'Fechar', { duration: 2000, });
		} else {
			this.snackBar.open('no', 'Fechar', { duration: 2000, });
		}
	}

	close(): void { this.dialogRef.close(); }
}