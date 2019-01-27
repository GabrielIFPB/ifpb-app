import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent,  } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MaterialLoginModule } from './login.material.module';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    MaterialLoginModule
  ],
  declarations: [ LoginComponent ],
  entryComponents: [  ],
  providers: [ AuthGuard ]
})
export class LoginModule { }
