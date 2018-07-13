import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampusComponent } from './campus.component';

const routes: Routes = [
	{ path: 'campus',	component: CampusComponent, },
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	declarations: []
})
export class CampusRoutingModule { }
