import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampusComponent } from './campus.component';
import { EditarCampusComponent } from './editar.campus/editar.campus.component';

const routes: Routes = [
	{ path: 'campus',	component: CampusComponent, },
	{ path: 'editar/campi',	component: EditarCampusComponent, },
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	declarations: []
})
export class CampusRoutingModule { }
