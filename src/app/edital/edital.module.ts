import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

import { EditalComponent, ModalComponent } from './edital.component';
import { EditalRoutingModule } from './edital-routing.module';
import { MaterialEditalModule } from './edital.material.module';
import { EditalService } from './edital.service';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		// HttpClientModule,
        EditalRoutingModule,
		MaterialEditalModule
	],
	declarations: [ EditalComponent, ModalComponent ],
	entryComponents: [ ModalComponent ],
	providers: [ EditalService ]
})
export class EditalModule {}