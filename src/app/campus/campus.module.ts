import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CampusComponent } from './campus.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule
	],
	declarations: [ CampusComponent ],
	providers: [ ]
})
export class CampusModule { }
