import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Campus } from './campus';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CampusService {

	private _url = 'http://localhost:3000/campus';

	private _handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			console.error(error, `Operation: --> ${operation} <--`);
			console.log(`${operation} failed: ${error.message}`);
			return of(result as T)
		}
	}

	constructor(private _http: HttpClient) { }

	add(campus: Campus): Observable<Campus> {
		return this._http.post<Campus>(this._url, campus, httpOptions)
			.pipe(
				tap(() => console.log('add campus')),
				catchError(this._handleError<Campus>('ERROR: ADD CAMPUS'))
			);
	}

	getCampus(): Observable<Campus[]> {
		return this._http.get<Campus[]>(this._url)
			.pipe(
				tap(),
				catchError(this._handleError('getCampus', []))
			);
	}

	getCampi(campus: Campus | number): Observable<Campus> {
		const id = typeof campus === 'number' ? campus : campus.id;
		const url = `${this._url}/${id}`;
		return this._http.get<Campus>(url)
			.pipe(
				tap(() => console.log('')),
				catchError(this._handleError<Campus>('get'))
			);
	}

	put(campus: Campus): Observable<Campus> {
		return this._http.put<Campus>(this._url, campus, httpOptions)
			.pipe(
				tap(() => console.log('')),
				catchError(this._handleError<Campus>(''))
			);
	}

	delete(campus: Campus | number): Observable<Campus> {
		const id = typeof campus === 'number' ? campus : campus.id ;
		const url = `${this._url}/${id}`;
		return this._http.delete<Campus>(url , httpOptions)
			.pipe(
				tap(() => console.log('')),
				catchError(this._handleError<Campus>(''))
			);
	}

	searchAluno(str: String): Observable<Campus[]> {
		if (!str.trim()) return of([]);
		return this._http.get<Campus[]>(this._url)
			.pipe(
				tap(() => console.log('Fetched Campus!')),
				catchError(this._handleError('searchCampus', []))
			);
	}
}
