import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
    imports: [ MatTableModule, MatInputModule, MatCardModule, MatIconModule, MatPaginatorModule ],
    exports: [ MatTableModule, MatInputModule, MatCardModule, MatIconModule, MatPaginatorModule ]
})
export class MaterialEditalModule { }