import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EditalComponent, DialogOverviewExampleDialog } from './edital.component';
import { EditalRoutingModule } from './edital-routing.module';
import { MaterialEditalModule } from './edital.material.module';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
        EditalRoutingModule,
		MaterialEditalModule
	],
	declarations: [ EditalComponent, DialogOverviewExampleDialog ],
	entryComponents: [ DialogOverviewExampleDialog ],
	providers: [ ]
})
export class EditalModule {}