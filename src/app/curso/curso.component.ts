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

	private _name: string = null;
	private _nivel: number = null;
	private _campi: number = null;
	private _error: any;
	private _curso: Curso;
	private _campus: Campus[];
	private _niveis: Array<string> = [ 'Integrado', 'Subsequente', 'Superior', 'Pós graduação' ];

	constructor(private _service: CursoService, public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: Curso, public snackBar: MatSnackBar) {
		this._service.getCampus().subscribe(result => this._campus = result);
	}

	save(): void {
		// if (this._name &&  this._nivel, this._campi) {
		// 	let curso = {
		// 		id: null,
		// 		name: this._name,
		// 		nivel: this._niveis[(this._nivel - 1)].nivel,
		// 		campi: this._campi
		// 	}
		// 	// this._service.add(curso)
		// 	// 	.subscribe(result => this._curso = result, error => this._error = error);
		// 	this.snackBar.open('ok', 'Fechar', { duration: 2000, });
		// } else {
		// 	this.snackBar.open('no', 'Fechar', { duration: 2000, });
		// }
	}

	close(): void { this.dialogRef.close(); }
}