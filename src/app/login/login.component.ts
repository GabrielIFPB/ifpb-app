import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { LoginService } from './login.service';
import { Router } from '@angular/router';

import { AES } from 'crypto-ts';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	private _hide: boolean = true;

	constructor(
		public snackBar: MatSnackBar,
		private service: LoginService, 
		private router: Router
	) { }

	ngOnInit() {
	}

	onSubmit(form): void {
		let data = null;
		let user = form.form.value.user; // pegando o obj do form
		this.service.auth(
				user.username,
				AES.encrypt(user.password, '').toString() // após o password pode-se usar uma chave
			).subscribe(result => data = result);
		console.log(data);
		if (data && data[0].success) {
			this.router.navigate(['panel'])
			this.service.setStatus(true);
		} else {
			this.snackBar.open('Não tem permissão!', 'Fechar', { 
				duration: 2000,
				panelClass: '' 
			});
		}
	}

}
