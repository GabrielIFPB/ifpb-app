import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

import { Refeicao } from './Refeicao';
import { RefeicaoService } from './refeicao.service';
import { Campus } from '../campus/campus'
import { Aluno } from '../aluno/aluno';

@Component({
	selector: 'app-refeicao',
	templateUrl: './refeicao.component.html',
	styleUrls: ['./refeicao.component.css']
})
export class RefeicaoComponent implements OnInit {

	private _name: string = null;
	private _refeicao: Refeicao[];

	displayedColumns: string[] = ['id', 'name', 'edit'];
	dataSource: MatTableDataSource<Refeicao>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private _service: RefeicaoService, private dialog: MatDialog) { }

	rowClicked(row: any): void { console.log(row); }

	ngOnInit() { }

	search() {
		this.dataSource = new MatTableDataSource(this._refeicao);
		this._service.getRefeicaoByName(this._name.trim().toLowerCase()).subscribe(result => this.dataSource.data = result);
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
	selector: 'app-dialog2',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css']
})
export class ModalComponent {

	private _expression: string = `[A-Za-z '-çÂãÕõáéíóúâêîôû]*`;
	private _exprNumber: string = `[0-9,]*`;
	private _exprtime: string = `[0-9]{2}\:?[0-9]{2}`;
	private _campus: Campus[];
	private _alunos: Aluno[];
	private _refeicao: Refeicao;
	private _error: any;

	constructor(private _service: RefeicaoService, public snackBar: MatSnackBar, public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: Refeicao) {
		this._service.getCampus().subscribe(result => this._campus = result);
		this._service.getAlunos().subscribe(result => this._alunos = result);
	}

	onSubmit(form): void {
		let refeicao = form.form.value.refeicao;
		console.log( form );
		if (form.form.status == "VALID" && refeicao.ativo != '') {
			this._service.add(refeicao)
				.subscribe(result => this._refeicao = result, error => this._error = error);
			this.snackBar.open('Salvo com sucesso!', 'Fechar', { duration: 200000, panelClass: 'red' });
		} else {
			this.snackBar.open('Erro ao salvar', 'Fechar', { duration: 2000, panelClass: '' });
		}
	}

	close(): void { this.dialogRef.close(); }
}