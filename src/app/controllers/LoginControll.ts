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
    private _error: string = '';

    constructor(private _service: LoginService, private _router: Router) { }

    ngOnInit() { }

    submit(): void {
        this._service.getLogin(this._username, this._password)
            .subscribe(
                (result: Login) => this.login = result,
                error => this._error = error
            );
        if (this.login instanceof Array) {
            if (this.login[0].username && this.login[0].password) {
                this._router.navigate(['/']);
            } else {
                this._router.navigate(['/login']);
            }
        } else {
            console.log(this._error);
            console.log('   --ERROR--   ');
        }
    }
}