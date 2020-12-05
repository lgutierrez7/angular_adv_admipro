import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';


import { NotpagefoundComponent } from './notpagefound/notpagefound.component';





const routes: Routes = [


  {   path: '', redirectTo: '/dashboard' , pathMatch: 'full' },
  {   path: '**', component: NotpagefoundComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
