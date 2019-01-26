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

	private _urlFuncio: string = 'http://localhost:3000/funcionarios';
	private _status = false;

	private _handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			console.error(error, `Operation: --> ${operation} <--`);
			console.log(`${operation} failed: ${error.message}`);
			return of(result as T)
		}
	}
	
	constructor(private _http: HttpClient) { }

	auth(username: string, password: string): Observable<any> {
		console.log(password);
		if (!username.trim() || !password.trim()) return of([]);
		// let url = `${this._urlFuncio}?email=${username}&password=${password}`;
		return this._http.post<Data>(this._urlFuncio, {
			username,
			password
		}, httpOptions)
			.pipe(
				tap(() => console.log('Fetched login!')),
				catchError(this._handleError('error login!', []))
			);
	}

	getStatus() {
		return this._status;
	}

	setStatus(value: boolean) {
		this._status = value;
	}
}
