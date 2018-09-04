import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunoComponent } from './aluno.component';

const routes: Routes = [
	{ path: 'alunos',	component: AlunoComponent, },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class AlunoRoutingModule { }
