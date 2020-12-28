import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [


    {   path: 'dashboard', 
        component:PagesComponent ,
        children : [
        {   path: '', component:DashboardComponent , data : { titulo : 'Dashboard'} },
        {   path: 'progress', component:ProgressComponent ,data : { titulo : 'Progress Bar'} },
        {   path: 'chart', component:Grafica1Component,data : { titulo : 'Grafica 1'}  },
        {   path: 'account-settings', component:AccountSettingsComponent ,data : { titulo : 'Ajustes de cuenta'} },
        {   path: 'promesas', component:PromesasComponent ,data : { titulo : 'Promesas'} },
        {   path: 'rxjs', component:RxjsComponent,data : { titulo : 'RXJS'}  },
        //{   path: '', redirectTo: 'dashboard' , pathMatch: 'full' },
        ]

    },
    /*
    { path: '', component: HomeComponent },
    { path: 'path2', component: Name2Component },
    { path: 'path3', component: Name3Component },
    { path: 'path4', component: Name4Component },
    { path: '**', component: PageNotFoundComponent },*/

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
