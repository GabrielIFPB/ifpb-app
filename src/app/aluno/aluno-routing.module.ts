import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunoComponent } from './aluno.component';

const APP_ROUTES: Routes = [
	{ path: 'alunos',	component: AlunoComponent, },
];

@NgModule({
  imports: [
    RouterModule.forChild(APP_ROUTES)
  ],
  declarations: []
})
export class AlunoRoutingModule { }
