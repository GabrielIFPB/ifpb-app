import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiaRefeicaoComponent } from './diarefeicao.component';

const routes: Routes = [
	{ path: 'dia-refeicao',	component: DiaRefeicaoComponent, },
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	declarations: []
})
export class DiaRefeicaoRoutingModule { }