import { Pessoa } from './Pessoa';

export interface Arquivo {
	id: number
	nomeRealArquivo: string
	nomeSistemaArquivo: string
	extensãoArquivo: string
	submetedor: Pessoa
	data: string
	tipoArquivo: number
	ativo: boolean
	file: {}
}
