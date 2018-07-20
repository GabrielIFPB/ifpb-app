import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CursoComponent } from './curso.component';

@NgModule({
  imports: [
    CommonModule,
		FormsModule,
  ],
  declarations: [ CursoComponent ],
	entryComponents: [ ],
	providers: [ ]
})
export class CursoModule { }
