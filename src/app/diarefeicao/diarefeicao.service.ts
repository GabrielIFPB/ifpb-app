import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { DiaRefeicao } from './diarefeicao';
import { Refeicao } from '../refeicao/Refeicao';
import { Aluno } from '../aluno/aluno';
import { Edital } from '../edital/edital';
import { Campus } from '../campus/campus'

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class DiaRefeicaoService {

	private _url: string = 'http://localhost:3000/dia_refeicao';
	private _urlRefeicao: string = 'http://localhost:3000/refeicoes';
	private _urlAluno: string = 'http://localhost:3000/alunos';
	private _urlEdital: string = 'http://localhost:3000/editais';
	private _urlCampus: string = 'http://localhost:3000/campus';

	private _handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			console.error(error, `Operation: --> ${operation} <--`);
			console.log(`${operation} failed: ${error.message}`);
			return of(result as T)
		}
	}

	constructor(private _http: HttpClient) { }

	add(diarefeicao: DiaRefeicao): Observable<DiaRefeicao> {
		return this._http.post<DiaRefeicao>(this._url, diarefeicao, httpOptions)
			.pipe(
				tap(() => console.log('add DiaRefeicao')),
				catchError(this._handleError<DiaRefeicao>('ERROR: ADD DiaRefeicao'))
			);
	}

	getRefeicoes(): Observable<Refeicao[]> {
		return this._http.get<Refeicao[]>(this._urlRefeicao)
			.pipe(
				tap(() => console.log('Fetched Refeicao!!!')),
				catchError(this._handleError('getRefeicao', []))
			);
	}

	getAlunos(): Observable<Aluno[]> {
		return this._http.get<Aluno[]>(this._urlAluno)
			.pipe(
				tap(() => console.log('Fetched Aluno!!!')),
				catchError(this._handleError('getAluno', []))
			);
	}

	getEditais(): Observable<Edital[]> {
		return this._http.get<Edital[]>(this._urlEdital)
			.pipe(
				tap(() => console.log('Fetched Edital!!!')),
				catchError(this._handleError('getEdital', []))
			);
	}

	getCampus(): Observable<Campus[]> {
		return this._http.get<Campus[]>(this._urlCampus)
			.pipe(
				tap(() => console.log('Fetched Campus!!!')),
				catchError(this._handleError('getCampus', []))
			);
	}

	getDiaRefeicaoByName(name: String): Observable<DiaRefeicao[]> {
		if (!name.trim()) return of([]);
		let url = `${this._url}?q=${name}`;
		return this._http.get<DiaRefeicao[]>(url)
			.pipe(
				tap(() => console.log('Fetched DiaRefeicao name!')),
				catchError(this._handleError('getDiaRefeicaoByName', []))
			);
	}
}
