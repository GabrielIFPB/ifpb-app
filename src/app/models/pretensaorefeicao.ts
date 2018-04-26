import { ConfirmaPretensaoDia } from '../confirmapretensaodia/confirmapretensaodia';

export interface PretensaoRefeicao {
	id: number
	confirmaPretensaoDia: ConfirmaPretensaoDia
	dataSolicitacao: string
	keyAccess: string
	ativo: boolean
}
