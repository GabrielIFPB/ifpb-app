import { Campus } from '../campus/campus';

export interface Pessoa {
	id: number
	name: string
	keyAuth: string
	email: string
	campus: any  // podendo ser um objeto ou um id
	tipo: number
	ativo: boolean
	dataInsercao: string
}
