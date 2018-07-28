import { Campus } from '../campus/campus';
import { Evento } from '../models/Evento';
import { Funcionario } from '../funcionario/funcionario';

export interface Edital {
	id: number
	name: string
	campi: Campus
	quantidadeBeneciadosPrevista: number
	quantidadeBeneciadosReal: number
	dataInicial: string
	dataFinal: string
	evento: Evento
	responsavel: any
	previstoPretensao: boolean
	funcionario: any
	dataInsercao: string
	ativo: boolean
}
