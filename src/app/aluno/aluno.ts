import { Pessoa } from '../models/Pessoa';
import { Arquivo } from '../models/Arquivo';
import { Curso } from '../curso/curso';
import { Campus } from '../campus/campus';

export interface Aluno extends Pessoa {
	matricula: string
	curso: Curso | number
	periodo: string
	turma: string
	turno: string
	// fotoPerfil: Arquivo
	acesso: boolean
	campi: Campus | number
}
