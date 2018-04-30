import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Home } from './controllers/HomeControll';
import { LoginControll } from './controllers/LoginControll';

import { AlunoControllList } from './controllers/AlunoControllList';
import { AlunoService } from './services/aluno.service';

import { AppRouting } from './routes/app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        Home,
        LoginControll,
        AlunoControllList,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRouting
    ],
    providers: [ AlunoService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
