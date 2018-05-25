import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [
        MatToolbarModule, MatButtonModule, MatCardModule,
        MatSidenavModule, MatExpansionModule, MatTableModule, MatInputModule
    ],
    exports: [
        MatToolbarModule, MatButtonModule, MatCardModule,
        MatSidenavModule, MatExpansionModule, MatTableModule, MatInputModule
    ]
})
export class MaterialAppModule { }