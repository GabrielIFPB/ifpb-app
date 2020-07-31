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
	private _status = JSON.parse(localStorage.getItem('loggedIn') || 'false');

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
	// usando get por conta do json-server só aceitar post para salvar 
	// já em uma aplicação normal deverá usar o post
	auth(username: string, password: string): Observable<Data[]> {
		if (!username.trim() || !password.trim()) return of([]);
		let url = `${this._urlAuth}?username=${username}&password=${password}`;
		return this._http.get<Data[]>(url, httpOptions)
			.pipe(
				tap(() => console.log('Fetched login!')),
				catchError(this._handleError('error autenticação!', []))
			);
	}

	getToken(): Observable<Data> {
		return this._http.get<Data>(this._urlAuth);
	}

	getStatus() {
		return JSON.parse(
			localStorage.getItem('loggedIn') || this._status.toString()
		);
	}

	setStatus(value: boolean) {
		this._status = value;
		localStorage.setItem('loggeIn', 'true');
	}
}
