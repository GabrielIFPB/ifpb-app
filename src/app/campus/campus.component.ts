import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CampusService } from './campus.service';
import { Campus } from './Campus';

@Component({
	selector: 'app-campus',
	templateUrl: './campus.component.html',
	styleUrls: ['./campus.component.css']
})
export class CampusComponent implements OnInit {

	private _campus: Campus[];

	displayedColumns: string[] = ['id', 'sigla', 'cidade', 'data', 'ativo', 'edit', 'delete'];
  	dataSource: MatTableDataSource<Campus>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private _service: CampusService, private dialog: MatDialog) {
		this.getCampus();
		// Create 100 users
		// const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
		// Assign the data to the data source for the table to render
		this.dataSource = new MatTableDataSource(this._campus);
	}

	ngOnInit() {
		this.getCampus();
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

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
		//   this.animal = result;
		});
	}

	private getCampus(): void {
		this._service.getCampus()
			.subscribe(result => this._campus = result);
			console.log( this._campus );
	}

	delete(): void { }
}

@Component({
	selector: 'app-dialog',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css']
})
export class ModalComponent {

	private _ativo: boolean = null;
	private _cidade: string = '';
	private _sigla: string = '';
	private _campus: Campus;
	private _error: string = '';

	constructor(private _service: CampusService, public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: Campus) { }

	save(): void {
		let campus = {
			id: null,
			sigla: this._sigla,
			cidade: this._cidade,
			dataInsercao: null,
			ativo: this._ativo
		};
		let ax = this._service.add(campus)
			.subscribe(
				result => this._campus = result,
				error => this._error = error
			);
		console.log(this._campus);
		console.log(ax);
		// return null;
	}

	close(): void {
		this.dialogRef.close();
	}
}
