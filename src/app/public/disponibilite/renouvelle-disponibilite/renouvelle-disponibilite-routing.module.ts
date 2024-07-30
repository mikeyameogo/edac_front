import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenouvelleDisponibiliteComponent } from './renouvelle-disponibilite.component';

const routes: Routes = [
  { path: '', component: RenouvelleDisponibiliteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenouvelleDisponibiliteRoutingModule { }
