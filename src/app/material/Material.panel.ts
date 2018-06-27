import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [ MatSidenavModule, MatListModule, MatGridListModule, MatCardModule],
    exports: [ MatSidenavModule, MatListModule, MatGridListModule, MatCardModule]
})
export class MaterialPanelModule { }