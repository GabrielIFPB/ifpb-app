import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Home } from './controllers/HomeControll';
import { LoginModule } from './modules/Login.module';

import { AlunoControllList } from './controllers/AlunoControllList';
import { AlunoService } from './services/Aluno.service';

import { PanelModule } from './modules/Panel.module';

import { AppRouting } from './routes/app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialAppModule } from './material.app.module';

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
        PanelModule,
        AppRouting,
        BrowserAnimationsModule,
        MaterialAppModule
    ],
    providers: [ AlunoService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
