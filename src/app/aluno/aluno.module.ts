import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlunoComponent } from './aluno.component';
import { AlunoRoutingModule } from './aluno-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlunoRoutingModule
  ],
  declarations: [ AlunoComponent ]
})
export class AlunoModule { }
