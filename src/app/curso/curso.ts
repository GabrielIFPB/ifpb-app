import { Campus } from '../campus/campus';
// import { Nivel } from '../models/Nivel';

export interface Curso {
	id: number
	nome: string
	campus: Campus
	nivel: string
}
