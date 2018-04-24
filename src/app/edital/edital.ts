import { Campus } from '../campus/campus';
import { Evento } from '../evento/evento';
import { Funcionario } from '../funcionario/funcionario';

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
