import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructureRoutingModule } from './structure-routing.module';
import { StructuresComponent } from './structures.component';
import { CreerModifierStructureComponent } from './creer-modifier-structure/creer-modifier-structure.component';
import { DetailStructureComponent } from './detail-structure/detail-structure.component';
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


@NgModule({
  declarations: [
    StructuresComponent,
    CreerModifierStructureComponent,
    DetailStructureComponent
  ],
    imports: [
        CommonModule,
        StructureRoutingModule,
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
export class StructureModule { }
