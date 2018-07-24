import { Refeicao } from '../refeicao/Refeicao';
import { Dia } from './Dia';
import { Edital } from '../edital/edital';
import { Aluno } from './Aluno';

export interface MapaRefeicao {
	lista: Array<Text>
	quantidade: number
	refeicao: Refeicao
	dia: Dia
	edital: Edital
	aluno: Aluno
	data: string
}
