import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { PanelControll } from '../controllers/PanelControll';
// import { LoginService } from '../services/Login.service';
import { PanelRoutingModule } from '../routes/panel-routing.module';
// import { MaterialLoginModule } from '../material/Material.login';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		PanelRoutingModule,
		// MaterialLoginModule
	],
	declarations: [
		PanelControll
	],
	providers: [
		
	]
})
export class PanelModule {}