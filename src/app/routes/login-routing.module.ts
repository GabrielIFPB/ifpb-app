import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginControll } from '../controllers/LoginControll';

const routes: Routes = [
	{ path:'login', component: LoginControll },
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [ RouterModule ],
})
export class LoginRoutingModule { }