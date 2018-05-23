import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
    imports: [
        MatToolbarModule, MatButtonModule, MatCardModule,
        MatSidenavModule, MatExpansionModule,
    ],
    exports: [
        MatToolbarModule, MatButtonModule, MatCardModule,
        MatSidenavModule, MatExpansionModule,
    ]
})
export class MaterialAppModule { }