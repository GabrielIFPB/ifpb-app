import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Home } from './home/HomeControll';

const routes: Routes = [
    { path: '',  component: Home },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { enableTracing: true }) ],
    exports: [ RouterModule ],
    declarations: [  ]
})
export class AppRouting {}