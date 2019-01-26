import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelControll } from './PanelControll';
import { AuthGuard } from '../login/auth.guard';

const routes: Routes = [
	{ 
		path: 'panel',
		component: PanelControll, 
		canActivate: [ AuthGuard ] 
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [ RouterModule ],
})
export class PanelRoutingModule { }