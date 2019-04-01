import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, 
	MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

import { CampusService } from './campus.service';
import { Campus } from './campus';

@Component({
	selector: 'app-campus',
	templateUrl: './campus.component.html',
	styleUrls: ['./campus.component.css']
})
export class CampusComponent implements OnInit {

	private _name: string = null;
	private _campus: Campus[];

	displayedColumns: string[] = ['id', 'sigla', 'cidade', 'data', 'ativo', 'edit'];
  	dataSource: MatTableDataSource<Campus>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private _service: CampusService, private dialog: MatDialog) { }

	rowClicked(row: any): void { console.log(row); }

	ngOnInit() { 
	}

	search() {
		this.dataSource = new MatTableDataSource(this._campus);
		this._service.getCampiByName(this._name.trim().toLowerCase()).subscribe(result => this.dataSource.data = result);
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
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
	private _campus: Campus;
	private _error: any;

	constructor(private _service: CampusService, public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: Campus, public snackBar: MatSnackBar) { }

	onSubmit(form): void {
		let campi = form.form.value.campi;
		if (form.form.status == "VALID" && campi.ativo) {
			this._service.add(campi)
				.subscribe(result => this._campus = result, error => this._error = error);
			this.snackBar.open('Salvo com sucesso!', 'Fechar', { duration: 200000, panelClass: 'red' });
		} else {
			this.snackBar.open('Erro ao salvar', 'Fechar', { duration: 2000, panelClass: '' });
		}
	}

	close(): void { this.dialogRef.close(); }
}
