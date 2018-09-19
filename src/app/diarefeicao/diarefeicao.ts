import { Aluno } from '../aluno/aluno';
import { Refeicao } from '../refeicao/Refeicao';
import { Edital } from '../edital/edital';
import { Campus } from '../campus/campus';

export interface DiaRefeicao {
	id: number
	aluno: Aluno | any
	refeicao: Refeicao | any 
	edital: Edital | any
	campi: Campus | any
	diaSemana: string
}
