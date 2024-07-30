import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RectificationDisponibiliteComponent } from './rectification-disponibilite.component';

const routes: Routes = [
  { path: '', component: RectificationDisponibiliteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RectificationDisponibiliteRoutingModule { }
