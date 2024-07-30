import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnulationDetachementComponent } from './annulation-detachement.component';

const routes: Routes = [
  { path: '', component: AnnulationDetachementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnulationDetachementRoutingModule { }
