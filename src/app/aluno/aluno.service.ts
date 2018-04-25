import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/Rx';
import { Aluno } from './aluno';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AlunoService {
	
	private _url = '';
	// private _alunos: Aluno[];
	// private _aluno: Aluno;

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

	getAluno(): Observable<Aluno> {
		return this._http.get<Aluno>(this._url)
			.pipe(
				tap(aluno => console.log('')),
				catchError(this.handleError<Aluno>('get'))
			);
	}

	postAluno(aluno: Aluno){
		return aluno;
	}
}
