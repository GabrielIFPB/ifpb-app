import { Refeicao } from '../refeicao/refeicao';

export interface PeriodoRefeicaoRealizada {
	refeicao: Refeicao
	dataInicio: string
	dataFim: string
}
