import { DiaRefeicao } from '../diarefeicao/diarefeicao';
import { Motivo } from '../motivo/motivo';
import { Funcionario } from '../funcionario/funcionario';

export interface Bloqueio {
	id: number
	diaRefeicao: DiaRefeicao
	motivo: Motivo
	funcionario: Funcionario
	dataBloqueio: string
	ativo: boolean
}
