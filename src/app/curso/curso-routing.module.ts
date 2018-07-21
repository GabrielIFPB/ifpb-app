import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoComponent } from './curso.component';

const routes: Routes = [
	{ path: 'cursos',	component: CursoComponent, },
];

@NgModule({
  imports: [
		RouterModule.forChild(routes)
	],
  declarations: []
})
export class CursoRoutingModule { }
