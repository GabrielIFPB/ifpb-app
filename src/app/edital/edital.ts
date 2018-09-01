import { Campus } from '../campus/campus';
import { Evento } from '../models/Evento';
import { Funcionario } from '../funcionario/funcionario';

export interface Edital {
	id: number
	name: string
	campi: any
	dataInicial: string
	dataFinal: string
	evento: Evento
	responsavel: any
	cota: number
	// created_on: string
	// updated_on: string
	// ativo: boolean
}
