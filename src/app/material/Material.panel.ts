import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
    imports: [ MatSidenavModule, MatListModule, MatGridListModule, ],
    exports: [ MatSidenavModule, MatListModule, MatGridListModule, ]
})
export class MaterialPanelModule { }