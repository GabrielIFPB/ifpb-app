import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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
			height: '450px',
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
	private _cpf: string = null;
	private _email: string = null;
	private _campi: number = null;
	private _error: any;
	private _campus: Campus[];

	email = new FormControl('', [Validators.required, Validators.email]);

	constructor(private _service: FuncionarioService, 
					public dialogRef: MatDialogRef<ModalComponent>, 
						@Inject(MAT_DIALOG_DATA) public data: Funcionario, 
							public snackBar: MatSnackBar, public formControl: FormControl) {
		this._service.getCampus().subscribe(result => this._campus = result);
	}

	save(): void {
		if (false) {
			
			// this._service.add(curso)
			// 	.subscribe(result => this._curso = result, error => this._error = error);
			this.snackBar.open('ok', 'Fechar', { duration: 2000, });
		} else {
			this.snackBar.open('no', 'Fechar', { duration: 2000, });
		}
	}

	getErrorMessage() {
		return this.email.hasError('required') ? 'You must enter a value' :
			this.email.hasError('email') ? 'Not a valid email' :
				'';
	  }

	close(): void { this.dialogRef.close(); }
}