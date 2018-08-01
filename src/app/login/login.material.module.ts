import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [ MatInputModule, MatButtonModule, ],
    exports: [ MatInputModule, MatButtonModule, ]
})
export class MaterialLoginModule { }