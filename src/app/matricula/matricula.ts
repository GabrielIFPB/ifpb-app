import { Aluno } from '../aluno/aluno';
import { Curso } from '../curso/curso';
import { Turno } from '../turno/turno';
import { Periodo } from '../periodo/periodo';

export interface Matricula {
	id: number
	numero: string
	aluno: Aluno
	curso: Curso
	turno: Turno
	periodo: Periodo
}
