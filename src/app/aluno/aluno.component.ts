import { Component, OnInit } from '@angular/core';

import { Aluno } from './aluno'

@Component({
	selector: 'app-aluno',
	templateUrl: './aluno.component.html',
	styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

	private aluno: Aluno = {
		id: 1,
		nome: 'dell',
		keyAuth: 'sdfasdf',
		email: 'sfasdf@adsfc.occ',
		// campus: {}, //Campus
		tipo: true,
		ativo: true,
		// roles: {}, // List<Role> roles
		// TIPO_FUNCIONARIO: 1,
		// TIPO_ALUNO: 1,

		matricula: '2017.3',
		// curso: {}, //Curso
		// periodo: {}, //Periodo
		// turma: {}, //Turma
		// turno: {}, //Turno
		keyConfirmation: 'sfvxcv$%TRg',
		// fotoPerfil: {}, //Arquivo
		acesso: true,
	};

	constructor() { }

	ngOnInit() {
	}

}
