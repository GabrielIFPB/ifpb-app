import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { LoginService } from './login.service';
import { Router } from '@angular/router';

import { AES, SHA256 } from 'crypto-ts';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	private _hide: boolean = true;

	constructor(public snackBar: MatSnackBar,
		 private service: LoginService, private router: Router) { }

	ngOnInit() {
	}

	onSubmit(form): void {
		let user = form.form.value.login;
		this.service.auth(
				user.username,
				AES.encrypt(user.password, 'ifpb').toString()
			).subscribe(data => {
				// if (data.)
			}

			);
		if (false)
			this.router.navigate(['panel'])
		else
			this.snackBar.open('Não tem permissão!', 'Fechar', { duration: 2000, panelClass: '' });
	}

}
