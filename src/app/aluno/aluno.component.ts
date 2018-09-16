import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';
import { Campus } from '../campus/campus';
import { Curso } from '../curso/curso';

@Component({
	selector: 'app-aluno',
	templateUrl: './aluno.component.html',
	styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

	private _name: string = null;
	private _aluno: Aluno[];

	displayedColumns: string[] = ['id', 'matricula', 'name', 'edit'];
	dataSource: MatTableDataSource<Aluno>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private _service: AlunoService, private dialog: MatDialog) { }

	rowClicked(row: any): void { console.log(row); }

	ngOnInit() { }

	search() {
		this.dataSource = new MatTableDataSource(this._aluno);
		this._service.getAlunoByName(this._name.trim().toLowerCase()).subscribe(result => this.dataSource.data = result);
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	openDialog(): void {
		let dialogRef = this.dialog.open(ModalComponent, {
			width: '450px',
			height: '500px',
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
	selector: 'app-dialog',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css']
})
export class ModalComponent {

	private _expression: string = `[A-Za-z '-çÂãÕõáéíóúâêîôû]*`;
	private _exprNumber: string = `[0-9]*`;
	private _aluno: Aluno;
	private _error: any;
	private _campus: Campus[];
	private _cursos: Curso[];

	private _turnos: Array<string> = [
		'Matutino',
		'Vespertino',
		'Noturno'
	];

	constructor(private _service: AlunoService, public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: Aluno, public snackBar: MatSnackBar) {
		this._service.getCampus().subscribe(result => this._campus = result);
		this._service.getCursos().subscribe(result => this._cursos = result);
	}

	onSubmit(form): void {}

	close(): void { this.dialogRef.close(); }
}
