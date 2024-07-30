import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PieceComponent } from './piece.component';

const routes: Routes = [
  {
    path: '', component: PieceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PieceRoutingModule { }
