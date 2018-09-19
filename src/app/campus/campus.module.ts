import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CampusComponent, ModalComponent } from './campus.component';
import { CampusRoutingModule } from './campus-routing.module';
import { MaterialCampusModule } from './campus.material.modules';
import { CampusService } from './campus.service';
import { EditarCampusComponent } from './editar.campus/editar.campus.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		CampusRoutingModule,
		MaterialCampusModule
	],
	declarations: [ CampusComponent, ModalComponent, EditarCampusComponent ],
	entryComponents: [ ModalComponent ],
	providers: [ CampusService ]
})
export class CampusModule { }
