import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CursoComponent, ModalComponent } from './curso.component';
import { CursoRoutingModule } from './curso-routing.module';
import { MaterialCursoModule } from './curso.material.module';
import { CursoService } from './curso.service';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		CursoRoutingModule,
		MaterialCursoModule
	],
	declarations: [ CursoComponent, ModalComponent ],
	entryComponents: [ ModalComponent ],
	providers: [ CursoService ]
})
export class CursoModule { }
