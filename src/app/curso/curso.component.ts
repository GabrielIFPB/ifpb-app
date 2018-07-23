import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CursoService } from './curso.service';
import { Curso, Nivel } from './curso';
import { Campus } from '../campus/campus';

@Component({
	selector: 'app-curso',
	templateUrl: './curso.component.html',
	styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

	private _cursos: Curso[];

	displayedColumns: string[] = ['id', 'name', 'nivel', 'edit'];
  	dataSource: MatTableDataSource<Curso>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private _service: CursoService, private dialog: MatDialog) {
		this.dataSource = new MatTableDataSource(this._cursos);
		this._service.getCursos().subscribe(result => this.dataSource.data = result);
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

	private _name: string = '';
	private _nivel: number;
	private _campi: number = 0;
	private _error: any;
	private _curso: Curso;
	private _campus: Campus[];
	private _niveis: Array<Nivel> = [ 
		{ id: 1, nivel: 'Integrado' },
		{ id: 2, nivel: 'Subsequente' },
		{ id: 3, nivel: 'Superior' },
		{ id: 4, nivel: 'Pós graduação' } 
	];

	constructor(private _service: CursoService, public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: Curso) {
		this._service.getCampus().subscribe(result => this._campus = result);
	}

	save(): void {
		let curso = {
			id: null,
			name: this._name,
			nivel: this._niveis[(this._nivel - 1)].nivel,
			campi: this._campi
		}

		if (this._name &&  this._nivel) {
			this._service.add(curso).subscribe(result => this._curso = result, error => this._error = error);
		} else {

		}
	}

	close(): void { this.dialogRef.close(); }
}