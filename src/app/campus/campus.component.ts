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

	private is_set: boolean = false;

	displayedColumns: string[] = ['id', 'sigla', 'cidade', 'data', 'ativo', 'edit'];
  	dataSource: MatTableDataSource<Campus>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private _service: CampusService, private dialog: MatDialog) {
		this.getCampusInit();
		console.log(this._campus);
	}

	rowClicked(row: any): void {
		console.log(row);
	}

	ngOnInit() {
		this.dataSource = new MatTableDataSource(this._campus);
		this.dataSource.connect();
	}

	applyFilter(filterValue: string) {
		// Capturar o texto digitado pelo usuário.
		this.dataSource.filter = filterValue.trim().toLowerCase();
		// Consultar no serviço os campi.
		if (!this.is_set) {
			// this.getCampusInit();
			this.dataSource = new MatTableDataSource(this._campus);
			this.dataSource.connect();
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
			this.is_set = true;
		}
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

	private getCampusInit(): void {
		this._service.getCampusInit().subscribe(result => this._campus = result);
	}

	private getCampus(cidade: String): void {
		console.log(cidade)
		this._service.getCampus(cidade).subscribe(result => this._campus = result);
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
	}

	close(): void {
		this.dialogRef.close();
	}
}
