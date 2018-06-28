import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditalComponent } from './edital.component';

const routes: Routes = [
	{ path: 'editais',	component: EditalComponent, },
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [ RouterModule ],
})
export class EditalRoutingModule { }