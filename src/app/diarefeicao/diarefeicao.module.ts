import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DiaRefeicaoRoutingModule } from './diarefeicao-routing.module';
import { DiaRefeicaoComponent } from './diarefeicao.component';
import { DiaRefeicaoService } from './diarefeicao.service';
import { MaterialDiaRefeicaoCursoModule } from './diarefeicao.material.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		DiaRefeicaoRoutingModule,
		MaterialDiaRefeicaoCursoModule
	],
	declarations: [ DiaRefeicaoComponent ],
	entryComponents: [  ],
	providers: [ DiaRefeicaoService ]
})
export class DiaRefeicaoModule { }
