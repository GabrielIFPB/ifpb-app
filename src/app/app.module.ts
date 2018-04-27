import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AlunoControlList } from './controllers/AlunoControlList';
import { AlunoService } from './services/aluno.service';

@NgModule({
    declarations: [
        AppComponent,
        AlunoControlList
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [ AlunoService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
