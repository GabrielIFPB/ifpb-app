import { Campus } from './Campus';

export interface Pessoa {
	id: number
	nome: string
	keyAuth: string
	email: string
	// campus: Campus
	tipo: boolean
	ativo: boolean
	// roles: {} // List<Role> roles
	// TIPO_FUNCIONARIO: number
	// TIPO_ALUNO: number
}
