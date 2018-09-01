import { Pessoa } from '../models/Pessoa';
import { Curso } from '../curso/curso';
import { Arquivo } from '../models/Arquivo';

export interface Aluno extends Pessoa {
	matricula: string
	curso: Curso
	periodo: string
	turma: string
	turno: string
	keyConfirmation: string
	// fotoPerfil: Arquivo
	acesso: boolean
}
