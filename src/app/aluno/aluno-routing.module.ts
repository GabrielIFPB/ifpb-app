import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunoComponent } from './aluno.component';
import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';

const APP_ROUTES: Routes = [
	{ path: 'alunos',	component: AlunoComponent, },
	{ path: 'aluno/:id',	component: AlunoDetalhesComponent, },
];

@NgModule({
  imports: [
    RouterModule.forChild(APP_ROUTES)
  ],
  declarations: []
})
export class AlunoRoutingModule { }
