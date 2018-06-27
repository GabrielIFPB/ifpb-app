import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
    imports: [ MatInputModule, MatButtonModule, MatTableModule, MatCardModule, 
        MatIconModule, MatPaginatorModule],
    exports: [ MatInputModule, MatButtonModule, MatTableModule, MatCardModule, 
        MatIconModule, MatPaginatorModule]
})
export class MaterialAlunoModule { }