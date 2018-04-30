import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/Rx';
import { Login } from '../models/Login';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class LoginService {
    private _url = '';

    constructor(private _http: HttpClient) { }

    private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error, `Operation: --> ${operation} <--`);
			return of(result as T)
		}
    }
    
    getLogin(username: string, password: string): Observable<Login> {
		return this._http.get<Login>(this._url)
			.pipe(
				tap(user => console.log('')),
				catchError(this.handleError<Login>('getLogin'))
			);
	}
}