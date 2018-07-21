import { Campus } from '../campus/campus';

export interface Curso {
	id: number
	nome: string
	campus: Campus
	nivel: string
}
