import { Refeicao } from '../refeicao/Refeicao';

export interface PeriodoRefeicaoRealizada {
	refeicao: Refeicao
	dataInicio: string
	dataFim: string
}
