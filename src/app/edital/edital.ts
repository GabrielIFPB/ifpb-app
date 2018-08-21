import { Campus } from '../campus/campus';
import { Evento } from '../models/Evento';
import { Funcionario } from '../funcionario/funcionario';

export interface Edital {
	id: number
	name: string
	campi: Campus
	qtdBeneciadosPrevista: number
	qtdBeneciadosReal: number
	dataInicial: string
	dataFinal: string
	evento: Evento
	responsavel: any
	previstoPretensao: boolean
	dataInsercao: string
	ativo: boolean
}
