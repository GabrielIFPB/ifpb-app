import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError, pipe } from 'rxjs';
import { catchError, tap, map, filter, mergeMap } from 'rxjs/operators';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root'
})
export class LoginService {

	private _urlFuncio: string = 'http://localhost:3000/funcionarios';

	private _handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			console.error(error, `Operation: --> ${operation} <--`);
			console.log(`${operation} failed: ${error.message}`);
			return of(result as T)
		}
	}
	
	constructor(private _http: HttpClient) { }

	logar(username: string, password: string): Observable<any> {
		if (!username.trim() || !password.trim()) return of([]);
		let url = `${this._urlFuncio}?email=${username}&password=${password}`;
		return this._http.get<any>(url, httpOptions)
			.pipe(
				tap(() => console.log('Fetched login!')),
				catchError(this._handleError('error login!', []))
			);
	}

	validateUser(login: any) {
		let userData = "username=" + login.username + "&password=" + login.password 
	}
}
