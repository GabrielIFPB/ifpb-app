import { Pessoa } from '../pessoa/pessoa';
// import { Setor } from '../setor/setor';

export interface Funcionario extends Pessoa {
	id: number
	// setor: Setor
	dataInsercao: string
}
