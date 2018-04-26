import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/Rx';
import { Aluno } from '../models/Aluno';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AlunoService {

	private _url = '';

	constructor(private _http: HttpClient) { }

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error, `Operation: --> ${operation} <--`);
			return of(result as T)
		}
	}

	getAlunos(): Observable<Aluno[]> {
		return this._http.get<Aluno[]>(this._url)
			.pipe(
				tap(Alunos => console.log('Fetched alunos!')),
				catchError(this.handleError('getAlunos', []))
			);
	}

	getAluno(aluno: Aluno | number): Observable<Aluno> {
		const id = typeof aluno === 'number' ? aluno : aluno.id;
		const url = `${this._url}/${id}`;
		return this._http.get<Aluno>(url)
			.pipe(
				tap(aluno => console.log('')),
				catchError(this.handleError<Aluno>('get'))
			);
	}

	postAluno(aluno: Aluno): Observable<Aluno> {
		return this._http.post<Aluno>(this._url, aluno, httpOptions)
			.pipe(
				tap(aluno => console.log('')),
				catchError(this.handleError<Aluno>(''))
			);
	}

	putAluno(aluno: Aluno): Observable<Aluno> {
		return this._http.put<Aluno>(this._url, aluno, httpOptions)
			.pipe(
				tap(aluno => console.log('')),
				catchError(this.handleError<Aluno>(''))
			);
	}

	deleteAluno(aluno: Aluno | number): Observable<Aluno> {
		const id = typeof aluno === 'number' ? aluno : aluno.id ;
		const url = `${this._url}/${id}`;
		return this._http.delete<Aluno>(url , httpOptions)
			.pipe(
				tap(aluno => console.log('')),
				catchError(this.handleError<Aluno>(''))
			);
	}

	searchAluno(str: String): Observable<Aluno[]> {
		if (!str.trim()) return of([]);
		return this._http.get<Aluno[]>(this._url)
			.pipe(
				tap(Alunos => console.log('Fetched alunos!')),
				catchError(this.handleError('searchAluno', []))
			);
	}
}
