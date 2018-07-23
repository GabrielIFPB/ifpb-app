import { Campus } from '../campus/campus';

export interface Nivel {
	id: number
	nivel: string
}

export interface Curso {
	id: number
	name: string
	campi: any
	nivel: string
}
