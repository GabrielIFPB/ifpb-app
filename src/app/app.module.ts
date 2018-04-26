import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlunoControlList } from './controllers/AlunoControlList';

@NgModule({
    declarations: [
        AppComponent,
        AlunoControlList
    ],
    imports: [
        BrowserModule
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule { }
