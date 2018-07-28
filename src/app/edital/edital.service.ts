import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Edital } from './edital';
import { Campus } from '../campus/campus';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EditalService {

	private _url: string = 'http://localhost:3000/editais';
	private _urlCampus: string = 'http://localhost:3000/campus';

	private _handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			console.error(error, `Operation: --> ${operation} <--`);
			console.log(`${operation} failed: ${error.message}`);
			return of(result as T)
		}
	}

	constructor(private _http: HttpClient) { }

	add(edital: Edital): Observable<Edital> {
		return this._http.post<Edital>(this._url, edital, httpOptions)
			.pipe(
				tap(() => console.log('Salvo com sucesso!')),
				catchError(this._handleError<Edital>('Problema ao adicionar o edital!'))
			);
	}

	getCampus(): Observable<Campus[]> {
		return this._http.get<Campus[]>(this._urlCampus)
			.pipe(
				tap(() => console.log('Fetched campus!')),
				catchError(this._handleError('Erro ao buscar todos os campus', []))
			);
	}

	put(edital: Edital): Observable<Edital> {
		return this._http.put<Edital>(this._url, edital, httpOptions)
			.pipe(
				tap(() => console.log('')),
				catchError(this._handleError<Edital>(''))
			);
	}

	delete(edital: Edital | number): Observable<Edital> {
		const id = typeof edital === 'number' ? edital : edital.id;
		const url = `${this._url}/${id}`;
		return this._http.delete<Edital>(url, httpOptions)
			.pipe(
				tap(() => console.log('Detelado com sucesso!')),
				catchError(this._handleError<Edital>('Erro ao deletar edital!'))
			);
	}

	search(name: String): Observable<Edital[]> {
		if (!name.trim()) return of([]);
		let url = `${this._url}?q=${name}`;
		return this._http.get<Edital[]>(url)
			.pipe(
				tap(() => console.log('Fetched edital!')),
				catchError(this._handleError('Erro search edital!', []))
			);
	}
}
