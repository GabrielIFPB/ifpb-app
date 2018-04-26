import { Pessoa } from './pessoa';
import { Curso } from './curso';
import { Periodo } from './periodo';
import { Turma } from './turma';
import { Turno } from './turno';
import { Arquivo } from './arquivo';

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
