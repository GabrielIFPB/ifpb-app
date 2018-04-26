import { Campus } from './Campus';
import { Evento } from './Evento';
import { Funcionario } from './Funcionario';

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
