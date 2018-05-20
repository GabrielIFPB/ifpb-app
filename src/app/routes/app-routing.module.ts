import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from '../controllers/HomeControll';
import { LoginControll } from '../controllers/LoginControll';

const routes: Routes = [
    { path: 'home',  component: Home },
    { path: 'login', component: LoginControll },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { enableTracing: true }) ],
    exports: [ RouterModule ],
    declarations: [  ]
})
export class AppRouting {}