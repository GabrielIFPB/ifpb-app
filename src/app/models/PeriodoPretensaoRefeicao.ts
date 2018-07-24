import { Refeicao } from '../refeicao/Refeicao';

export interface PeriodoPretensaoRefeicao {
	refeicao: Refeicao
	dataInicio: string
	dataFim: string
}
