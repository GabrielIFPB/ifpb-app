import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

import { DiaRefeicaoService } from './diarefeicao.service';
import { DiaRefeicao } from './diarefeicao';
import { Aluno } from '../aluno/aluno';

@Component({
	selector: 'app-diarefeicao',
	templateUrl: './diarefeicao.component.html',
	styleUrls: ['./diarefeicao.component.css']
})
export class DiaRefeicaoComponent implements OnInit {

	private _name: string = null;
	private _diarefecao: DiaRefeicao[];

	displayedColumns: string[] = ['id', 'refeicao', 'aluno', 'campi', 'edit'];
  	dataSource: MatTableDataSource<DiaRefeicao>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private _service: DiaRefeicaoService, private dialog: MatDialog) { }

	rowClicked(row: any): void { console.log(row); }

	ngOnInit() { }

	search() {
		this.dataSource = new MatTableDataSource(this._diarefecao);
		this._service.getDiaRefeicaoByName(this._name.trim().toLowerCase()).subscribe(result => this.dataSource.data = result);
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

	constructor(private _service: DiaRefeicaoService, public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: DiaRefeicao, public snackBar: MatSnackBar) {

	}

	close(): void { this.dialogRef.close(); }
}
