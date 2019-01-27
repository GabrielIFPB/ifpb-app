import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { PanelControll } from './PanelControll';
import { PanelRoutingModule } from './panel-routing.module';
import { MaterialPanelModule } from './Material.panel';
import { AuthGuard } from '../login/auth.guard';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		PanelRoutingModule,
		MaterialPanelModule,
	],
	declarations: [
		PanelControll,
	],
	providers: [
		AuthGuard
	]
})
export class PanelModule {}