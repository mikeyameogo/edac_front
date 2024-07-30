import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorpsComponent } from './corps.component';

const routes: Routes = [
  {
    path: '', component: CorpsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorpsRoutingModule { }
