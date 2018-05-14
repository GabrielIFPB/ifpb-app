import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Home } from './controllers/HomeControll';
import { LoginModule } from './modules/Login.module';
// import { LoginControll } from './controllers/LoginControll';
// import { LoginService } from './services/Login.service';

import { AlunoControllList } from './controllers/AlunoControllList';
import { AlunoService } from './services/Aluno.service';

import { AppRouting } from './routes/app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        Home,
        AlunoControllList,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        LoginModule,
        AppRouting
    ],
    providers: [ AlunoService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
