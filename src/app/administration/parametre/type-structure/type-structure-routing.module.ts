import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TypeStructureComponent} from "./type-structure.component";

const routes: Routes = [
    {
        path:"",
        component: TypeStructureComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeStructureRoutingModule { }
