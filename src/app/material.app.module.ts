import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
    imports: [ MatToolbarModule, MatButtonModule, MatCardModule, MatSidenavModule, ],
    exports: [ MatToolbarModule, MatButtonModule, MatCardModule, MatSidenavModule, ]
})
export class MaterialAppModule { }