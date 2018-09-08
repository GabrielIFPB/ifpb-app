import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlunoComponent, ModalComponent } from './aluno.component';
import { AlunoRoutingModule } from './aluno-routing.module';
import { MaterialAlunoModule } from './aluno.material.module';
import { AlunoService } from './aluno.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlunoRoutingModule,
    MaterialAlunoModule
  ],
  declarations: [ AlunoComponent, ModalComponent ],
	entryComponents: [ ModalComponent ],
	providers: [ AlunoService ]
})
export class AlunoModule { }
