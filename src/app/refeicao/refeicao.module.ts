import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RefeicaoComponent, ModalComponent } from './refeicao.component';
import { RefeicaoRoutingModule } from './refeicao-routing.module';
import { RefeicaoService } from './refeicao.service';
import { MaterialRefeicaoModule } from './refeicao.material.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RefeicaoRoutingModule,
		MaterialRefeicaoModule
	],
	declarations: [ RefeicaoComponent, ModalComponent ],
	entryComponents: [ ModalComponent ],
	providers: [ RefeicaoService ]
})
export class RefeicaoModule { }
