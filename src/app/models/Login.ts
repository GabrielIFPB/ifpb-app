import { Pessoa } from './Pessoa';

export interface Login {
	id: number
	pessoa: Pessoa
	keyAuth: string
	userAgent: string
	registro: string
	remoteAddr: string
	loged: boolean
}
