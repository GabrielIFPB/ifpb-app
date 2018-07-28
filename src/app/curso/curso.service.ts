import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Curso } from './curso';
import { Campus } from '../campus/campus';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CursoService {

	private _url: string = 'http://localhost:3000/cursos';
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

	add(curso: Curso): Observable<Curso> {
		return this._http.post<Curso>(this._url, curso, httpOptions)
			.pipe(
				tap(curso => console.log('add CURSO')),
				catchError(this._handleError<Curso>('ERROR: ADD CURSO'))
			);
	}

	getCursos(): Observable<Curso[]> {
		return this._http.get<Curso[]>(this._url)
			.pipe(
				tap(curso => console.log('Fetched cursos!!!')),
				catchError(this._handleError('getCursos', []))
			);
	}

	getCampus(): Observable<Campus[]> {
		return this._http.get<Campus[]>(this._urlCampus)
			.pipe(
				tap(() => console.log('Fetched campus!!!')),
				catchError(this._handleError('getCamppus', []))
			);
	}

	getCurso(curso: Curso | number): Observable<Curso> {
		const id = typeof curso === 'number' ? curso : curso.id;
		const url = `${this._url}/${id}`;
		return this._http.get<Curso>(url)
			.pipe(
				tap(() => console.log('')),
				catchError(this._handleError<Curso>('get'))
			);
	}

	put(curso: Curso): Observable<Curso> {
		return this._http.put<Curso>(this._url, curso, httpOptions)
			.pipe(
				tap(() => console.log('')),
				catchError(this._handleError<Curso>(''))
			);
	}

	delete(curso: Curso | number): Observable<Curso> {
		const id = typeof curso === 'number' ? curso : curso.id ;
		const url = `${this._url}/${id}`;
		return this._http.delete<Curso>(url , httpOptions)
			.pipe(
				tap(curso => console.log('')),
				catchError(this._handleError<Curso>(''))
			);
	}

	getCursoByName(name: String): Observable<Curso[]> {
		if (!name.trim()) return of([]);
		let url = `${this._url}?q=${name}`;
		return this._http.get<Curso[]>(url)
			.pipe(
				tap(() => console.log('Fetched Curso name!')),
				catchError(this._handleError('getCursoByName', []))
			);
	}
}
