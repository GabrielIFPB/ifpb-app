import { Aluno } from './Aluno';
import { Curso } from '../curso/curso';
import { Turno } from './Turno';
import { Periodo } from './Periodo';

export interface Matricula {
	id: number
	numero: string
	aluno: Aluno
	curso: Curso
	turno: Turno
	periodo: Periodo
}
