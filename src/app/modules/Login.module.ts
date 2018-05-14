import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { LoginControll } from '../controllers/LoginControll';
import { LoginService } from '../services/Login.service';
import { LoginRoutingModule } from '../routes/login-routing.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		LoginRoutingModule
	],
	declarations: [
		LoginControll
	],
	providers: [
		LoginService
	]
})
export class LoginModule {}