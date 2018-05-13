import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// import 'rxjs/Rx';
import { Funcionario } from '../models/Funcionario';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class FuncionarioService {

	private _url = '';

	constructor(private _http: HttpClient) { }

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error, `Operation: --> ${operation} <--`);
			return of(result as T)
		}
	}

	getFuncionarios(): Observable<Funcionario[]> {
		return this._http.get<Funcionario[]>(this._url)
			.pipe(
				tap(Alunos => console.log('Fetched Funcionarios!')),
				catchError(this.handleError('getFuncionarios', []))
			);
	}

	getFuncionario(funcionario: Funcionario | number): Observable<Funcionario> {
		const id = typeof funcionario === 'number' ? funcionario : funcionario.id ;
		const url = `${this._url}/${id}`;
		return this._http.get<Funcionario>(url)
			.pipe(
				tap(funcionario => console.log('Fetched Funcionario!')),
				catchError(this.handleError<Funcionario>('getFuncionario'))
			);
	}

	postFuncionario(funcionario: Funcionario): Observable<Funcionario> {
		return this._http.post<Funcionario>(this._url, funcionario, httpOptions)
			.pipe(
				tap(funcionario => console.log('')),
				catchError(this.handleError<Funcionario>(''))
			);
	}

	putAluno(funcionario: Funcionario): Observable<Funcionario> {
		return this._http.put<Funcionario>(this._url, funcionario, httpOptions)
			.pipe(
				tap(funcionario => console.log('')),
				catchError(this.handleError<Funcionario>(''))
			);
	}

	deleteAluno(funcionario: Funcionario | number): Observable<Funcionario> {
		const id = typeof funcionario === 'number' ? funcionario : funcionario.id ;
		const url = `${this._url}/${id}`;
		return this._http.delete<Funcionario>(url , httpOptions)
			.pipe(
				tap(funcionario => console.log('')),
				catchError(this.handleError<Funcionario>(''))
			);
	}

	searchAluno(str: String): Observable<Funcionario[]> {
		if (!str.trim()) return of([]);
		return this._http.get<Funcionario[]>(this._url)
			.pipe(
				tap(Alunos => console.log('Fetched alunos!')),
				catchError(this.handleError('searchAluno', []))
			);
	}
}
