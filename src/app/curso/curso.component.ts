import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

import { CursoService } from './curso.service';
import { Curso, Nivel } from './curso';
import { Campus } from '../campus/campus';

@Component({
	selector: 'app-curso',
	templateUrl: './curso.component.html',
	styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

	private _name: string = null;
	private _cursos: Curso[];

	displayedColumns: string[] = ['id', 'name', 'nivel', 'edit'];
  	dataSource: MatTableDataSource<Curso>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private _service: CursoService, private dialog: MatDialog) { }

	rowClicked(row: any): void { console.log(row); }

	ngOnInit() { }

	search() {
		this.dataSource = new MatTableDataSource(this._cursos);
		this._service.getCursoByName(this._name.trim().toLowerCase()).subscribe(result => this.dataSource.data = result);
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
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

	clear(): void {
		this._name = '';
		this.dataSource.data = [];
	}
}

@Component({
	selector: 'app-dialog1',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css']
})
export class ModalComponent {

	private _expression: string = `[A-Za-z '-çÂãÕõáéíóúâêîôû]*`;
	private _error: any;
	private _curso: Curso;
	private _campus: Campus[];
	private _niveis: Array<string> = [ 
		'Integrado',
		'Subsequente',
		'Superior',
		'Pós graduação'
	];

	constructor(private _service: CursoService, public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: Curso, public snackBar: MatSnackBar) {
		this._service.getCampus().subscribe(result => this._campus = result);
	}

	onSubmit(form): void {
		let curso = form.form.value.curso;
		if (form.form.status == "VALID") {
			this._service.add( curso )
				.subscribe(result => this._curso = result, error => this._error = error);
			this.snackBar.open('Salvo com sucesso!', 'Fechar', { duration: 200000, panelClass: 'green' });
		} else {
			this.snackBar.open('Erro ao salvar', 'Fechar', { duration: 2000, panelClass: 'red' });
		}
	}

	close(): void { this.dialogRef.close(); }
}