import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services/Login.service';

@Component({
    selector: 'app-login',
    templateUrl: '../views/login.html',
    styleUrls: ['../css/login.css']
})
export class LoginControll implements OnInit {

    private _username: string = '';
    private _password: string = '';
    private _keyAuth: string = '';

    constructor(private _service: LoginService) { }

    ngOnInit() { }

    submit(): void {
        console.log('lklklkll --> '+this._username+'\n'+this._password);
        // this._service.getLogin(this._username, this._password)
        //     .subscribe();
    }
}