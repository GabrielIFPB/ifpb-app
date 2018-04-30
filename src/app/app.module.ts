import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AlunoControllList } from './controllers/AlunoControllList';
import { AlunoService } from './services/aluno.service';

@NgModule({
    declarations: [
        AppComponent,
        AlunoControllList
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [ AlunoService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
