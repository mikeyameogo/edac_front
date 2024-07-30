import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TypeDemandeComponent} from "./type-demande.component";

const routes: Routes = [
    {
        path:"",
        component: TypeDemandeComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeDemandeRoutingModule { }
