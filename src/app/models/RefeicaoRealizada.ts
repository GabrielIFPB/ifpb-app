import { ConfirmaRefeicaoDia } from './ConfirmaRefeicaoDia';
import { Funcionario } from './Funcionario';

export interface RefeicaoREalizada {
    id: number
    confirmaRefeicao: ConfirmaRefeicaoDia
    horaRefeicao: string
    inspetor: Funcionario
}