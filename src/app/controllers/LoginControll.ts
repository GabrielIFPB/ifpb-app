import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: '../views/login.html',
    styleUrls: ['../css/login.css']
})
export class LoginControll implements OnInit {

    private login: {username: string, passwd: string}
    username: string = '';

    constructor() { }

    ngOnInit() { }

    onKey(username: string): void {
        console.log('lklklkll >> '+username+'\n');
    }
}