import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Home } from './controllers/HomeControll';

import { LoginModule } from './modules/Login.module';
import { AlunoModule } from './modules/Aluno.module';
import { PanelModule } from './modules/Panel.module';
import { EditalModule } from './edital/edital.module';

import { AppRouting } from './routes/app-routing.module';

import { MaterialAppModule } from './material.app.module';

@NgModule({
    declarations: [
        AppComponent,
        Home,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AlunoModule,
        LoginModule,
        PanelModule,
        EditalModule,
        AppRouting,
        BrowserAnimationsModule,
        MaterialAppModule,
    ],
    providers: [  ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
