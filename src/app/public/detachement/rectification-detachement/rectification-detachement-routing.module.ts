import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RectificationDetachementComponent } from './rectification-detachement.component';

const routes: Routes = [
  { path: '', component: RectificationDetachementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RectificationDetachementRoutingModule { }
