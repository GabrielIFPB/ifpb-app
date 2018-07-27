import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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

	constructor(private _service: FuncionarioService, private dialog: MatDialog) {
		this.dataSource = new MatTableDataSource(this._funcionarios);		
	}

	rowClicked(row: any): void { console.log(row); }

	ngOnInit() { }

	burcarFuncionario() {
		this.dataSource.filter = this._nome.trim().toLowerCase();
		this.dataSource = new MatTableDataSource(this._funcionarios);
		this._service.getFuncionarioByName(this._nome).subscribe(result => this.dataSource.data = result);
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	cadastrarFuncionarioDialog(): void {
		let dialogRef = this.dialog.open(ModalComponent, {
			width: '450px',
			height: '500px',
			data: {}
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

	private _name: string = null;
	private _cpf: string = null;
	private _email: string = null;
	private _campi: number = null;
	private _ativo: boolean = true;
	private _setor: string = null;
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

	//TODO: Tipo do funcionário: Professor, Técnico Administrativo.

	constructor(private _service: FuncionarioService,
					public snackBar: MatSnackBar,
						public dialogRef: MatDialogRef<ModalComponent>,
							@Inject(MAT_DIALOG_DATA) public data: Funcionario) {
								
		this._service.getCampus().subscribe(result => this._campus = result);
	}

	onKeyUp(event: KeyboardEvent): boolean {
		let value = (<HTMLInputElement>event.target).value;
		let numbers = ['1', '2', '3'];
		if (value[value.length - 1] == '1') return true;
		console.log(value[value.length - 1]);

		console.log(typeof value.charCodeAt(value.length - 1));
		console.log((<HTMLInputElement>event.target).value);
		return;
	}

	save(): void {
		let funcionario = {
			id: null,
			name: this._name,
			cpf: this._cpf,
			email: this._email,
			campi: this._campi,
			type: -1,
			dataInsercao: null,
			dateUpdate: null,
			setor: null,
			password: null,
			ativo: this._ativo
		}
		this._service.add(funcionario)
			.subscribe(result => this._funcionario = result, error => this._error = error);
		this.snackBar.open('Salvo com sucesso!', 'Fechar', { duration: 2000, });
	}

	close(): void { this.dialogRef.close(); }
}