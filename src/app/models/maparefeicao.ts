import { Refeicao } from '../refeicao/refeicao';
import { Dia } from '../dia/dia';
import { Edital } from '../edital/edital';
import { Aluno } from '../aluno/aluno';

export interface MapaRefeicao {
	lista: {}
	quantidade: number
	refeicao: Refeicao
	dia: Dia
	edital: Edital
	aluno: Aluno
	data: string
}
