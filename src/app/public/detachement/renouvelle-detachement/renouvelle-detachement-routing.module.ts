import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenouvelleDetachementComponent } from './renouvelle-detachement.component';

const routes: Routes = [
  { path: '', component: RenouvelleDetachementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenouvelleDetachementRoutingModule { }
