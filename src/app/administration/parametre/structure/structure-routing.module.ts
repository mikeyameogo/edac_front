import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreerModifierStructureComponent} from "./creer-modifier-structure/creer-modifier-structure.component";
import {StructuresComponent} from "./structures.component";

const routes: Routes = [
    {
        path:"",
        component:StructuresComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructureRoutingModule { }
