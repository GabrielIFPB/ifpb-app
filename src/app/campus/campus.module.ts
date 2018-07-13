import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CampusComponent, DialogOverviewExampleDialog } from './campus.component';
import { CampusRoutingModule } from './campus-routing.module';
import { MaterialCampusModule } from './campus.material.modules';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		CampusRoutingModule,
		MaterialCampusModule
	],
	declarations: [ CampusComponent, DialogOverviewExampleDialog ],
	entryComponents: [ DialogOverviewExampleDialog ],
	providers: [ ]
})
export class CampusModule { }
