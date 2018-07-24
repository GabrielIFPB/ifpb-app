import { Pessoa } from '../models/Pessoa';

export interface Funcionario extends Pessoa {
	setor: String
	password: string
}
