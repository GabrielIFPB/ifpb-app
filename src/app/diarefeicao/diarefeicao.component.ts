import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

import { DiaRefeicaoService } from './diarefeicao.service';
import { DiaRefeicao } from './diarefeicao';
import { Refeicao } from '../refeicao/Refeicao';
import { Aluno } from '../aluno/aluno';
import { Edital } from '../edital/edital';
import { Campus } from '../campus/campus'

@Component({
	selector: 'app-diarefeicao',
	templateUrl: './diarefeicao.component.html',
	styleUrls: ['./diarefeicao.component.css']
})
export class DiaRefeicaoComponent implements OnInit {

	private _name: string = null;
	private _diarefecao: DiaRefeicao[];

	displayedColumns: string[] = ['id', 'refeicao', 'custo', 'campi', 'edit'];
  	dataSource: MatTableDataSource<DiaRefeicao>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private _service: DiaRefeicaoService,
					private dialog: MatDialog) { }

	rowClicked(row: any): void { console.log(row); }

	ngOnInit() { }

	search() {
		this.dataSource = new MatTableDataSource(this._diarefecao);
		this._service.getDiaRefeicaoByName(
				this._name.trim().toLowerCase()
			).subscribe(
				result => this.dataSource.data = result
			);
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	openDialog(): void {
		let dialogRef = this.dialog.open(ModalComponent, {
			width: '450px',
			height: '400px',
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

	private _error: any;
	private _alunos: Aluno[];
	private _campus: Campus[];
	private _refeicoes: Refeicao[];
	private _diarefeicao: DiaRefeicao;
	private _editais: Edital[];
	private _diaSemana: Array<string> = [
		'Domingo',
		'Segunda',
		'Terça', 
		'Quarta',
		'Quinta', 
		'Sexta',
		'Sábado'
	];

	constructor(private _service: DiaRefeicaoService, 
				public dialogRef: MatDialogRef<ModalComponent>, 
				@Inject(MAT_DIALOG_DATA) public data: DiaRefeicao, 
				public snackBar: MatSnackBar) {

		this._service.getAlunos().subscribe(
			result => this._alunos = result);

		this._service.getCampus().subscribe(
			result => this._campus = result);

		this._service.getEditais().subscribe(
			result => this._editais = result);

		this._service.getRefeicoes().subscribe(
			result => this._refeicoes = result);
	}

	onSubmit(form): void {
		let diarefeicao = form.form.value.diarefeicao;
		if (form.form.status == "VALID") {
			this._service.add(diarefeicao)
				.subscribe(
					result => this._diarefeicao = result,
					error => this._error = error
				);
			this.snackBar.open('Salvo com sucesso!', 'Fechar', { 
				duration: 200000,
				panelClass: 'green' 
			});
		} else {
			this.snackBar.open('Erro ao salvar', 'Fechar', { 
				duration: 2000,
				panelClass: 'red' 
			});
		}
	}

	close(): void { this.dialogRef.close(); }
}
