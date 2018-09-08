import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlunoComponent } from './aluno.component';
import { AlunoRoutingModule } from './aluno-routing.module';
import { MaterialAlunoModule } from './aluno.material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlunoRoutingModule,
    MaterialAlunoModule
  ],
  declarations: [ AlunoComponent ],
	entryComponents: [  ],
	providers: [  ]
})
export class AlunoModule { }
