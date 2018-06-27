import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';

import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
    imports: [
        MatToolbarModule, MatButtonModule, MatCardModule,
        MatSidenavModule, MatExpansionModule, MatTableModule,
        MatInputModule, MatListModule, MatIconModule
    ],
    exports: [
        MatToolbarModule, MatButtonModule, MatCardModule,
        MatSidenavModule, MatExpansionModule, MatTableModule,
        MatInputModule, MatListModule, MatIconModule
    ]
})
export class MaterialAppModule { }