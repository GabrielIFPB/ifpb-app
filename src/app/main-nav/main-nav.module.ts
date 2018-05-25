import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { MaterialAppModule } from '../material.app.module';
import { MainNavComponent } from './main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MaterialAppModule,
	],
	declarations: [
		MainNavComponent
	],
	providers: [
		
	]
})
export class MainNavModule {}