import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CampusService } from './campus.service';
import { Campus } from './campus';

@Component({
	selector: 'app-campus',
	templateUrl: './campus.component.html',
	styleUrls: ['./campus.component.css']
})
export class CampusComponent implements OnInit {

	private _campus: Campus[];

	displayedColumns: string[] = ['id', 'sigla', 'cidade', 'data', 'ativo', 'edit'];
  	dataSource: MatTableDataSource<Campus>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private _service: CampusService, private dialog: MatDialog) {
		this.dataSource = new MatTableDataSource(this._campus);
		this._service.getCampus().subscribe(result => this.dataSource.data = result);
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
		if (this._sigla && this._cidade && this._ativo) {
			this._service.add(campus).subscribe(result => this._campus = result, error => this._error = error);
		} else {

		}
	}

	close(): void { this.dialogRef.close(); }
}
