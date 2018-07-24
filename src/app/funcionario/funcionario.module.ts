import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FuncionarioComponent, ModalComponent } from './funcionario.component';
import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { MaterialFuncionarioModule } from './funcionario.material.module';
import { FuncionarioService } from './funcionario.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FuncionarioRoutingModule,
    MaterialFuncionarioModule
  ],
  declarations: [ FuncionarioComponent, ModalComponent ],
  entryComponents: [ ModalComponent ],
  providers: [ FuncionarioService ]
})
export class FuncionarioModule { }
