import { Pessoa } from '../models/Pessoa';
import { Arquivo } from '../models/Arquivo';

export interface Aluno extends Pessoa {
	matricula: string
	curso: any
	periodo: string
	turma: string
	turno: string
	keyConfirmation: string
	// fotoPerfil: Arquivo
	acesso: boolean
	campi: any
}
