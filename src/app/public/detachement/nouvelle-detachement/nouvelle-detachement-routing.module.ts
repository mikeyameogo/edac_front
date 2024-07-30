import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouvelleDetachementComponent } from './nouvelle-detachement.component';

const routes: Routes = [
  { path: '', component: NouvelleDetachementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NouvelleDetachementRoutingModule { }
