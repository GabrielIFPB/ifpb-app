import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RefeicaoComponent } from './refeicao.component';
import { RefeicaoRoutingModule } from './refeicao-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RefeicaoRoutingModule
  ],
  declarations: [ RefeicaoComponent ],
  entryComponents: [  ],
  providers: [  ]
})
export class RefeicaoModule { }
