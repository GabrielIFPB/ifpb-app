export interface Pessoa {
	id: number
	name: string
	cpf: string
	// keyAuth: string
	email: string
	campi: any  // podendo ser um objeto do tipo campus ou um id
	type: number
	ativo: boolean
	dataInsercao: string
	dateUpdate: string
}
