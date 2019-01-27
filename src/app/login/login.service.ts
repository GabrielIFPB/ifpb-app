import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError, pipe } from 'rxjs';
import { catchError, tap, map, filter, mergeMap } from 'rxjs/operators';

import { User, Data } from './login';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	private _urlAuth: string = 'http://localhost:3000/auth';
	private _status = false;

	// utilizado para exibir erros
	private _handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			console.error(error, `Operation: --> ${operation} <--`);
			console.log(`${operation} failed: ${error.message}`);
			return of(result as T)
		}
	}
	
	constructor(private _http: HttpClient) { }

	// autenticação de usuário
	auth(username: string, password: string): Observable<Data[]> {
		console.log(password);
		if (!username.trim() || !password.trim()) return of([]);
		let url = `${this._urlAuth}?username=${username}&password=${password}`;
		return this._http.get<Data[]>(url, httpOptions)
			.pipe(
				tap(() => console.log('Fetched login!')),
				catchError(this._handleError('error autenticação!', []))
			);
	}

	getStatus() {
		return this._status;
	}

	setStatus(value: boolean) {
		this._status = value;
	}
}
