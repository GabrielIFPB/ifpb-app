import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunoControllList } from '../controllers/AlunoControllList';

const routes: Routes = [
	{ path: 'alunos',	component: AlunoControllList, },
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [ RouterModule ],
})
export class AlunoRoutingModule { }