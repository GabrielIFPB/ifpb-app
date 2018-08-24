import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [ MatInputModule, MatButtonModule, MatCardModule ],
    exports: [ MatInputModule, MatButtonModule, MatCardModule ]
})
export class MaterialLoginModule { }