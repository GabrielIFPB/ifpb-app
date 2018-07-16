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

	getCampus(): Observable<Campus[]> {
		return this._http.get<Campus[]>(this._url)
			.pipe(
				tap(() => console.log('Fetched Campus!')),
				catchError(this.handleError('getCampus', []))
			);
	}

	get(campus: Campus | number): Observable<Campus> {
		const id = typeof campus === 'number' ? campus : campus.id;
		const url = `${this._url}/${id}`;
		return this._http.get<Campus>(url)
			.pipe(
				tap(() => console.log('')),
				catchError(this.handleError<Campus>('get'))
			);
	}

	putAluno(campus: Campus): Observable<Campus> {
		return this._http.put<Campus>(this._url, campus, httpOptions)
			.pipe(
				tap(() => console.log('')),
				catchError(this.handleError<Campus>(''))
			);
	}

	deleteAluno(campus: Campus | number): Observable<Campus> {
		const id = typeof campus === 'number' ? campus : campus.id ;
		const url = `${this._url}/${id}`;
		return this._http.delete<Campus>(url , httpOptions)
			.pipe(
				tap(aluno => console.log('')),
				catchError(this.handleError<Campus>(''))
			);
	}

	searchAluno(str: String): Observable<Campus[]> {
		if (!str.trim()) return of([]);
		return this._http.get<Campus[]>(this._url)
			.pipe(
				tap(() => console.log('Fetched Campus!')),
				catchError(this.handleError('searchCampus', []))
			);
	}
}
