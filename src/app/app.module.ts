import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Home } from './controllers/HomeControll';
import { LoginModule } from './modules/Login.module';
import { AlunoModule } from './modules/Aluno.module';
import { PanelModule } from './modules/Panel.module';
import { MainNavModule } from './main-nav/main-nav.module';

import { AppRouting } from './routes/app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialAppModule } from './material.app.module';

import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        Home,
        // AlunoControllList,
        MainNavComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AlunoModule,
        LoginModule,
        PanelModule,
        AppRouting,
        BrowserAnimationsModule,
        MaterialAppModule,

        // MainNavModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule
    ],
    providers: [  ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
