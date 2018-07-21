import { Campus } from '../campus/campus';
import { Evento } from '../models/Evento';
import { Funcionario } from '../models/Funcionario';

export interface Edital {
	id: number
	nome: string
	campus: Campus
	quantidadeBeneciadosPrevista: number
	quantidadeBeneciadosReal: number
	dataInicial: string
	dataFinal: string
	evento: Evento
	responsavel: Funcionario
	previstoPretensao: boolean
	funcionario: Funcionario
	dataInsercao: string
	ativo: boolean
}
