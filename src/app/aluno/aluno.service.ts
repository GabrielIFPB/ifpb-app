import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Aluno } from './aluno';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AlunoService {

	private _url = 'http://localhost:3000/alunos';

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
}
