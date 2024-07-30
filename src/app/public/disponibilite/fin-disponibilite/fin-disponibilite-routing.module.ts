import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinDisponibiliteComponent } from './fin-disponibilite.component';

const routes: Routes = [
  { path: '', component: FinDisponibiliteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinDisponibiliteRoutingModule { }
