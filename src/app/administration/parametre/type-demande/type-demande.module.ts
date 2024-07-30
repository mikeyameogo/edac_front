import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeDemandeRoutingModule } from './type-demande-routing.module';
import { TypeDemandeComponent } from './type-demande.component';
import { CreerModifierTypeDemandeComponent } from './creer-modifier-type-demande/creer-modifier-type-demande.component';
import { DetailTypeDemandeComponent } from './detail-type-demande/detail-type-demande.component';
import {AppCommonModule} from "../../../shared/common/app-common.module";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {MessageModule} from "primeng/message";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {ProgressBarModule} from "primeng/progressbar";
import {MultiSelectModule} from "primeng/multiselect";
import {FieldsetModule} from "primeng/fieldset";


@NgModule({
  declarations: [
    TypeDemandeComponent,
    CreerModifierTypeDemandeComponent,
    DetailTypeDemandeComponent
  ],
    imports: [
        CommonModule,
        TypeDemandeRoutingModule,
        AppCommonModule,
        ButtonModule,
        CardModule,
        FormsModule,
        InputTextModule,
        MessageModule,
        ProgressSpinnerModule,
        SharedModule,
        TableModule,
        DropdownModule,
        ProgressBarModule,
        MultiSelectModule,
        FieldsetModule
    ]
})
export class TypeDemandeModule { }
