import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { PostedComponentComponent } from './components/posted-component/posted-component.component';
import { ViewClientsComponent } from './components/view-clients/view-clients.component';

const routes: Routes = [
  {path:"clients",component:ViewClientsComponent},
  {path:'posted',component:PostedComponentComponent},
  {path:'',pathMatch:"full", component:LandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
