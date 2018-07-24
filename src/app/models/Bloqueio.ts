import { DiaRefeicao } from './DiaRefeicao';
import { Motivo } from './Motivo';
import { Funcionario } from '../funcionario/funcionario';

export interface Bloqueio {
	id: number
	diaRefeicao: DiaRefeicao
	motivo: Motivo
	funcionario: Funcionario
	dataBloqueio: string
	ativo: boolean
}
