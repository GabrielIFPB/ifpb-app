import { Aluno } from '../aluno/aluno';
import { Dia } from '../dia/dia';
import { Refeicao } from '../refeicao/refeicao';
import { Edital } from '../edital/edital';
import { Funcionario } from '../funcionario/funcionario';;

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
