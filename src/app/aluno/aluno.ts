import { Pessoa } from '../pessoa/pessoa';
import { Curso } from '../curso/curso';
import { Periodo } from '../periodo/periodo';
import { Turma } from '../turma/turma';
import { Turno } from '../turno/turno';
import { Arquivo } from '../arquivo/arquivo';

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
