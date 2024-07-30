import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeStructureRoutingModule } from './type-structure-routing.module';
import {AppCommonModule} from "../../../shared/common/app-common.module";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {MessageModule} from "primeng/message";
import {PaginatorModule} from "primeng/paginator";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {ProgressBarModule} from "primeng/progressbar";
import {TypeStructureComponent} from "./type-structure.component";
import {
    CreerModifierTypeStructureComponent
} from "./creer-modifier-type-structure/creer-modifier-type-structure.component";
import {DetailTypeStructureComponent} from "./detail-type-structure/detail-type-structure.component";


@NgModule({
  declarations: [
    TypeStructureComponent,
    CreerModifierTypeStructureComponent,
    DetailTypeStructureComponent
  ],
    imports: [
        CommonModule,
        TypeStructureRoutingModule,
        AppCommonModule,
        ButtonModule,
        CardModule,
        FormsModule,
        InputTextModule,
        MessageModule,
        PaginatorModule,
        ProgressSpinnerModule,
        SharedModule,
        TableModule,
        ProgressBarModule
    ]
})
export class TypeStructureModule { }
