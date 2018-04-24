import { Refeicao } from '../refeicao/refeicao';

export interface PeriodoPretensaoRefeicao {
	refeicao: Refeicao
	dataInicio: string
	dataFim: string
}
