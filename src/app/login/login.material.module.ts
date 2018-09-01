import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    imports: [ MatInputModule, MatButtonModule, MatCardModule, MatIconModule, MatSnackBarModule ],
    exports: [ MatInputModule, MatButtonModule, MatCardModule, MatIconModule, MatSnackBarModule ]
})
export class MaterialLoginModule { }