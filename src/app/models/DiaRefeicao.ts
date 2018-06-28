import { Aluno } from './Aluno';
import { Dia } from './Dia';
import { Refeicao } from './Refeicao';
import { Edital } from '../edital/edital';
import { Funcionario } from './Funcionario';;

export interface DiaRefeicao {
	id: number
	aluno: Aluno
	dia: Dia
	refeicao: Refeicao
	edital: Edital
	funcionario: Funcionario
	dataInsercao: string
	ativo: boolean
	migracao: boolean
	pretensao: boolean
	refeicaoRealizada: boolean
}
