import { ConfirmaPretensaoDia } from './ConfirmaPretensaoDia';

export interface PretensaoRefeicao {
	id: number
	confirmaPretensaoDia: ConfirmaPretensaoDia
	dataSolicitacao: string
	keyAccess: string
	ativo: boolean
}
