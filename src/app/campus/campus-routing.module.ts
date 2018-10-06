import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampusComponent } from './campus.component';
import { CampusDetalhesComponent } from './campus-detalhes/campus-detalhes.component';

const APP_ROUTES: Routes = [
	{ path: 'campus',	component: CampusComponent, },
	{ path: 'campi-detalhe/:id', component: CampusDetalhesComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(APP_ROUTES)
	]
})
export class CampusRoutingModule { }
