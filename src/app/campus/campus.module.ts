import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { CampusComponent, ModalComponent } from './campus.component';
import { CampusRoutingModule } from './campus-routing.module';
import { MaterialCampusModule } from './campus.material.modules';
import { CampusService } from './campus.service';
import { CampusDetalhesComponent } from './campus-detalhes/campus-detalhes.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		CampusRoutingModule,
		MaterialCampusModule,
		RouterModule
	],
	declarations: [ CampusComponent, ModalComponent, CampusDetalhesComponent ],
	entryComponents: [ ModalComponent ],
	providers: [ CampusService ]
})
export class CampusModule { }
