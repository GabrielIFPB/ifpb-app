import { Campus } from '../campus/campus';
import { Nivel } from '../nivel/nivel';

export interface Curso {
	id: number
	nome: string
	campus: Campus
	nivel: Nivel
}
