import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { MainNavComponent } from './main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { Home } from '../controllers/HomeControll';

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
	],
	declarations: [
		MainNavComponent,
		Home
	],
	providers: [
		
	]
})
export class MainNavModule {}