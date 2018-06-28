import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { EditalComponent } from './edital.component';
import { EditalRoutingModule } from './edital-routing.module';
import { MaterialEditalModule } from './edital.material.module';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
        EditalRoutingModule,
        MaterialEditalModule
	],
	declarations: [ EditalComponent ],
	providers: [ ]
})
export class EditalModule {}