import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnulationDisponibiliteComponent } from './annulation-disponibilite.component';

const routes: Routes = [
  { path: '', component: AnnulationDisponibiliteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnulationDisponibiliteRoutingModule { }
