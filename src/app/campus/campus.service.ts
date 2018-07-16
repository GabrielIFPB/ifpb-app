import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Campus } from './Campus';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CampusService {

	private _url = '';

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error, `Operation: --> ${operation} <--`);
			return of(result as T)
		}
	}

	constructor(private _http: HttpClient) { }

	add(campus: Campus): Observable<Campus> {
		return this._http.post<Campus>(this._url, campus, httpOptions)
			.pipe(
				tap(() => console.log('')),
				catchError(this.handleError<Campus>(''))
			);
	}
}
