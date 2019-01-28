import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunoComponent } from './aluno.component';
import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';
import { AuthGuard } from '../login/auth.guard';

const APP_ROUTES: Routes = [
	{ path: 'alunos',	component: AlunoComponent, },
	{
    path: 'aluno-detalhe/:id',
    component: AlunoDetalhesComponent,
    canActivate: [ AuthGuard ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(APP_ROUTES)
  ],
  declarations: []
})
export class AlunoRoutingModule { }
