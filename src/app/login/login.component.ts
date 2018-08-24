import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	private _username: string = '';
	private _password: string = '';
	private _hide: boolean = true;

	constructor() { }

	ngOnInit() {
	}

	submit(): void {
		if (this._password && this._username) {
			console.log(this._username);
			console.log(this._password);
		} else {
			console.log('no!');
		}
	}

}
