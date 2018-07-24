import { ConfirmaRefeicaoDia } from './ConfirmaRefeicaoDia';
import { Funcionario } from '../funcionario/Funcionario';

export interface RefeicaoRealizada {
    id: number
    confirmaRefeicao: ConfirmaRefeicaoDia
    horaRefeicao: string
    inspetor: Funcionario
}