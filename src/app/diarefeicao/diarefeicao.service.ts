import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { DiaRefeicao } from './diarefeicao';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class DiaRefeicaoService {

	private _url: string = 'http://localhost:3000/cursos';

	private _handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			console.error(error, `Operation: --> ${operation} <--`);
			console.log(`${operation} failed: ${error.message}`);
			return of(result as T)
		}
	}

	constructor(private _http: HttpClient) { }

	getDiaRefeicaoByName(name: String): Observable<DiaRefeicao[]> {
		if (!name.trim()) return of([]);
		let url = `${this._url}?q=${name}`;
		return this._http.get<DiaRefeicao[]>(url)
			.pipe(
				tap(() => console.log('Fetched DiaRefeicao name!')),
				catchError(this._handleError('getDiaRefeicaoByName', []))
			);
	}
}
