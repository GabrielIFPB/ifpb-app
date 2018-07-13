import { Campus } from '../campus/Campus';
import { Nivel } from './Nivel';

export interface Curso {
	id: number
	nome: string
	campus: Campus
	nivel: Nivel
}
