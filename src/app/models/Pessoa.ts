export interface Pessoa {
	id: number
	name: string
	cpf: string
	// keyAuth: string
	email: string
	campus: any  // podendo ser um objeto do tipo campus ou um id
	tipo: number
	ativo: boolean
	dataInsercao: string
}
