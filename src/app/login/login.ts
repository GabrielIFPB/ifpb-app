import { Pessoa } from '../models/Pessoa';

import { LoginService } from './login.service';

export interface Login {
	username: string
	password: string
	keyAuth: string

	validKeyAuth(): boolean;
	// id: number
	// pessoa: Pessoa
	// userAgent: string
	// registro: string
	// remoteAddr: string
	// loged: boolean
}

export class LogClass implements Login {

	constructor(private service: LoginService, public username: string, public password: string, public keyAuth: string) { }

	validKeyAuth() {
		// this.service.
		return true
	}
}
