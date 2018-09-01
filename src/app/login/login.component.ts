import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	private _hide: boolean = true;

	constructor(public snackBar: MatSnackBar) { }

	ngOnInit() {
	}

	onSubmit(form): void {
		if (true) {

		} else {
			this.snackBar.open('Erro ao salvar', 'Fechar', { duration: 2000, panelClass: '' });
		}
	}

}
