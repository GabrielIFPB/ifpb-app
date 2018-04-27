import { Campus } from './Campus';
import { Nivel } from './Nivel';

export interface Curso {
	id: number
	nome: string
	campus: Campus
	nivel: Nivel
}
