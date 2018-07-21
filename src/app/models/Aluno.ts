import { Pessoa } from './Pessoa';
import { Curso } from '../curso/curso';
import { Periodo } from './Periodo';
import { Turma } from './Turma';
import { Turno } from './Turno';
import { Arquivo } from './Arquivo';

export interface Aluno extends Pessoa {
	matricula: string
	// curso: Curso
	// periodo: Periodo
	// turma: Turma
	// turno: Turno
	keyConfirmation: string
	// fotoPerfil: Arquivo
	acesso: boolean

}
