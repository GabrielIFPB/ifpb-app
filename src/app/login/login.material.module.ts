import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [ MatInputModule, MatButtonModule, MatCardModule, MatIconModule ],
    exports: [ MatInputModule, MatButtonModule, MatCardModule, MatIconModule ]
})
export class MaterialLoginModule { }