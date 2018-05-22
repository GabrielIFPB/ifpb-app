import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelControll } from '../controllers/PanelControll';

const routes: Routes = [
	{ path:'panel', component: PanelControll },
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [ RouterModule ],
})
export class PanelRoutingModule { }