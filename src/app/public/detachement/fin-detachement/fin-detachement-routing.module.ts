import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinDetachementComponent } from './fin-detachement.component';

const routes: Routes = [
  { path: '', component: FinDetachementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinDetachementRoutingModule { }
