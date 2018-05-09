import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Login } from '../models/Login';
import { LoginService } from '../services/Login.service';

@Component({
    selector: 'app-login',
    templateUrl: '../views/login.html',
    styleUrls: ['../css/login.css']
})
export class LoginControll implements OnInit {

    private login: Login;
    private _username: string = '';
    private _password: string = '';
    private _keyAuth: string = '';

    constructor(private _service: LoginService, private _router: Router) { }

    ngOnInit() { }

    submit(): void {
        this._service.getLogin(this._username, this._password)
            .subscribe(
                result => this.login = result,
            );
        if (this.login instanceof Array) {
            if (this.login.username && this.login.password) {
                this._router.navigate(['/']);
            } else {
                this._router.navigate(['/login']);
            }
        }
    }
}