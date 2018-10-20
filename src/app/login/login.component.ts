import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { Login, LogClass } from './login';
import { LoginService } from './login.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	private _hide: boolean = true;
	private log: Login;
	

	constructor(public snackBar: MatSnackBar, private service: LoginService) { }

	ngOnInit() {
	}

	onSubmit(form): void {
		let login = form.form.value.login;
		this.log = new LogClass(this.service, login.username, login.password, 'keyAuth')
		if (true) {

		} else {
			this.snackBar.open('Erro ao salvar', 'Fechar', { duration: 2000, panelClass: '' });
		}
	}

}
