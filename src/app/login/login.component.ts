import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { Data } from './login';
import { LoginService } from './login.service';

import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';

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

	onSubmit(form: any): void {
		let user = form.form.value.user; // pegando o obj do form
		let hashDigest = sha256(user.password);
		let hmacDigest = Base64.stringify(hmacSHA512(hashDigest, ''));
		console.log(hmacDigest);
		this.service.auth(
			user.username,
			hmacDigest
		).subscribe(
			(data) => {
				if (data && data.length && data[0].success) {
					this.router.navigate(['panel'])
					this.service.setStatus(true);
				} else {
					this.snackBar.open('Não tem permissão!', 'Fechar', { 
						duration: 2000,
						panelClass: '' 
					});
				}
			}
		);
	}
}
