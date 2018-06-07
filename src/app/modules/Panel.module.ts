import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { PanelControll } from '../controllers/PanelControll';
// import { LoginService } from '../services/Login.service';
import { PanelRoutingModule } from '../routes/panel-routing.module';
import { MaterialPanelModule } from '../material/Material.panel';

import { DataTableComponent } from '../data-table/data-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		PanelRoutingModule,
		MaterialPanelModule,
		
		MatTableModule,
		MatPaginatorModule,
		MatSortModule
	],
	declarations: [
		PanelControll,
		DataTableComponent
	],
	providers: [
		
	]
})
export class PanelModule {}