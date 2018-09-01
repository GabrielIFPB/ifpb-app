import { Pessoa } from '../models/Pessoa';

export interface Setor {
	id: number
	name: string
}

export interface Funcionario extends Pessoa {
	setor: String
	password: string
	type: number
}
