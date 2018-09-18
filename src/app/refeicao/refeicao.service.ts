import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Refeicao } from './Refeicao';
import { Campus } from '../campus/campus';
import { Aluno } from '../aluno/aluno';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RefeicaoService {

	private _url: string = 'http://localhost:3000/refeicoes';
	private _urlCampus: string = 'http://localhost:3000/campus';
	private _urlAlunos: string = 'http://localhost:3000/alunos';

	private _handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			console.error(error, `Operation: --> ${operation} <--`);
			console.log(`${operation} failed: ${error.message}`);
			return of(result as T)
		}
	}

	constructor(private _http: HttpClient) { }

	add(refeicao: Refeicao): Observable<Refeicao> {
		return this._http.post<Refeicao>(this._url, refeicao, httpOptions)
			.pipe(
				tap(() => console.log('add refeicao')),
				catchError(this._handleError<Refeicao>('ERROR: ADD refeicao'))
			);
	} 

	getAlunos(): Observable<Aluno[]> {
		return this._http.get<Aluno[]>(this._urlAlunos)
			.pipe(
				tap(_ => console.log('Fetched alunos!')),
				catchError(this._handleError('Erro ao buscar todos os alunos', []))
			);
	}

	getCampus(): Observable<Campus[]> {
		return this._http.get<Campus[]>(this._urlCampus)
			.pipe(
				tap(() => console.log('Fetched campus!')),
				catchError(this._handleError('Erro ao buscar todos os campus', []))
			);
	}

	getRefeicaoByName(name: String): Observable<Refeicao[]> {
		if (!name.trim()) return of([]);
		let url = `${this._url}?q=${name}`;
		return this._http.get<Refeicao[]>(url)
			.pipe(
				tap(() => console.log('Fetched Refeicao!')),
				catchError(this._handleError('searchFuncionario', []))
			);
	}
}
