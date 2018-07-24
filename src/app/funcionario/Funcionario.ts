import { Pessoa } from '../models/Pessoa';
import { Setor } from '../models/Setor';

export interface Funcionario extends Pessoa {
	setor: Setor
	dataInsercao: string
}
