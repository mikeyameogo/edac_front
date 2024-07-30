import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPublicComponent } from './dashboard-public.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from '../account/login/login.component';

const routes: Routes = [
  { path: '', component: DashboardPublicComponent },
  
 
  { path: '**', redirectTo: '/notfound' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
