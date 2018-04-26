import { Pessoa } from './Pessoa';
import { Setor } from './Setor';

export interface Funcionario extends Pessoa {
	setor: Setor
	dataInsercao: string
}
