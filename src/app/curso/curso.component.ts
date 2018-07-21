import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CursoService } from './curso.service';
import { Curso } from './curso';

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
		// this._service.getCampus().subscribe(result => this.dataSource.data = result);
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
			height: '320px',
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
	private _nivel: string = '';

	constructor(private _service: CursoService, public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: Curso) { }

	save(): void { }

	close(): void { this.dialogRef.close(); }
}