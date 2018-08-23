import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefeicaoComponent } from './refeicao.component';

const routes: Routes = [
	{ path: 'refeicoes',	component: RefeicaoComponent, },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class RefeicaoRoutingModule { }
