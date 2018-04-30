import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Home } from './controllers/HomeControll';
import { LoginControll } from './controllers/LoginControll';
import { LoginService } from './services/Login.service';

import { AlunoControllList } from './controllers/AlunoControllList';
import { AlunoService } from './services/Aluno.service';

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
        FormsModule,
        HttpClientModule,
        AppRouting
    ],
    providers: [ AlunoService, LoginService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
