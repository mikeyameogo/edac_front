import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotifComponent } from './motif.component';

const routes: Routes = [
  {
    path: '', component: MotifComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotifRoutingModule { }
