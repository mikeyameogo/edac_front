import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmpliationComponent } from './ampliation.component';

const routes: Routes = [
  {
    path: '', component: AmpliationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmpliationRoutingModule { }
