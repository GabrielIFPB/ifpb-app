import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

@NgModule({
    imports: [ MatSidenavModule, MatListModule ],
    exports: [ MatSidenavModule, MatListModule ]
})
export class MaterialPanelModule { }