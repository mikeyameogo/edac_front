import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouvelleDisponibiliteComponent } from './nouvelle-disponibilite.component';

const routes: Routes = [
  { path: '', component: NouvelleDisponibiliteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NouvelleDisponibiliteRoutingModule { }
