import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncionarioComponent } from './funcionario.component';

const routes: Routes = [
	{ path: 'funcionarios',	component: FuncionarioComponent, },
];

@NgModule({
  imports: [
		RouterModule.forChild(routes)
	],
  declarations: []
})
export class FuncionarioRoutingModule { }
