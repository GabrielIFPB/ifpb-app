import { Component, OnInit, ViewChild, Inject } from '@angular/core';
// import { FormControl, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';

import { FuncionarioService } from './funcionario.service';
import { Funcionario, Setor } from './funcionario';
import { Campus } from '../campus/campus';

@Component({
	selector: 'app-funcionario',
	templateUrl: './funcionario.component.html',
	styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

	private _nome: string = null;
	private _funcionarios: Funcionario[];

	displayedColumns: string[] = ['id', 'name', 'ativo', 'edit'];
	dataSource: MatTableDataSource<Funcionario>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private _service: FuncionarioService, private dialog: MatDialog) { }

	rowClicked(row: any): void { console.log(row); }

	ngOnInit() { }

	burcarFuncionario() {
		this.dataSource = new MatTableDataSource(this._funcionarios);
		this._service.getFuncionarioByName(this._nome.trim().toLowerCase()).subscribe(result => this.dataSource.data = result);
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	cadastrarFuncionarioDialog(): void {
		let dialogRef = this.dialog.open(ModalComponent, {
			width: '450px',
			height: '500px',
			data: {}
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
		});
	}

	limpar(): void {
		this._nome = '';
		this.dataSource.data = [];
	}
}

@Component({
	selector: 'app-dialog1',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css']
})
export class ModalComponent {

	private _expression: string = `[A-Za-z 'çÂãÕõáéíóúâêîôû]*`;
	private _error: any;
	private _campus: Campus[];
	private _funcionario: Funcionario;

	private _hidePasswd = true;
	private _hidePasswdConf = true;

	private _setores: Array<string> = [
		'Direção geral',
		'Coordenação de apoio ao estudante',
		'Coordenação pedagógica',
		'Coordenação de informática',
	];

	private _types: Array<string> = [
		'Professor',
		'Técnico Administrativo'
	];

	//TODO: Tipo do funcionário: Professor, Técnico Administrativo.

	constructor(private _service: FuncionarioService,
					public snackBar: MatSnackBar,
						public dialogRef: MatDialogRef<ModalComponent>,
							@Inject(MAT_DIALOG_DATA) public data: Funcionario) {
								
		this._service.getCampus().subscribe(result => this._campus = result);
	}

	onSubmit(form): void {
		let funcionario = form.form.value.funcionario;
		if (form.form.status == "VALID" && funcionario.ativo != '') {
			this._service.add(funcionario)
				.subscribe(result => this._funcionario = result, error => this._error = error);
			this.snackBar.open('Salvo com sucesso!', 'Fechar', { duration: 2000, });
		} else {
			this.snackBar.open('Erro ao salvar', 'Fechar', { duration: 2000, panelClass: '' });
		}
	}

	close(): void { this.dialogRef.close(); }
}