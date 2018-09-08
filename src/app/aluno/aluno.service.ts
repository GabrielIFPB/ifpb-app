import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Aluno } from './aluno';
import { Campus } from '../campus/campus';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AlunoService {

	private _url = 'http://localhost:3000/alunos';
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

	add(aluno: Aluno): Observable<Aluno> {
		return this._http.post<Aluno>(this._url, aluno, httpOptions)
			.pipe(
				tap(() => console.log('add aluno')),
				catchError(this._handleError<Aluno>('ERROR: ADD CAMPUS'))
			);
	}

	getCampus(): Observable<Campus[]> {
		return this._http.get<Campus[]>(this._urlCampus)
			.pipe(
				tap(),
				catchError(this._handleError('getCampus', []))
			);
	}

	getAlunoByName(name: String): Observable<Aluno[]> {
		if (!name.trim()) return of([]);
		let url = `${this._url}?q=${name}`;
		return this._http.get<Aluno[]>(url)
			.pipe(
				tap(() => console.log('Fetched Aluno!')),
				catchError(this._handleError('searchAluno', []))
			);
	}
}
