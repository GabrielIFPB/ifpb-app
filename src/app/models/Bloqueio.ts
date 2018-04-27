import { DiaRefeicao } from './DiaRefeicao';
import { Motivo } from './Motivo';
import { Funcionario } from './Funcionario';

export interface Bloqueio {
	id: number
	diaRefeicao: DiaRefeicao
	motivo: Motivo
	funcionario: Funcionario
	dataBloqueio: string
	ativo: boolean
}
