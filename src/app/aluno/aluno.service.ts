import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AlunoService {
	apiAddress: string;
	data: Array<any> = [];

	constructor(private _http: HttpClient) {
		this.apiAddress = 'https:json'
	}

	getData() {
		return this._http.get<Array<any>>('baseAddress')
			.subscribe(reponse => this.data = reponse);
	}

}
