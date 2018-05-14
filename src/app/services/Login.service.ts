import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Login } from '../models/Login';

const httpOptions = {
	headers: new HttpHeaders(
		{
			'Content-Type': 'application/json',
			'Authorization': 'my-auth-token'
		})
};

@Injectable()
export class LoginService {
    private _url = 'http://localhost:3000/login';

    constructor(private _http: HttpClient) { }

    private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error, `Operation: --> ${operation} <--`);
			return of(result as T)
		}
    }
    
    getLogin(username: string, password: string): Observable<Login> {
		const url = `${this._url}?username=${username}&password=${password}`;
		console.log(url);
		return this._http.get<Login>(url, httpOptions)
			.pipe(
				tap(login => console.log('login: username && password')),
				catchError(this.handleError<Login>('getLogin'))
			);
	}
}