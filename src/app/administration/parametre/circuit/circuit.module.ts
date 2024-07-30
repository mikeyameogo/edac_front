import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CircuitRoutingModule } from './circuit-routing.module';
import { CreerModifierCircuitComponent } from './creer-modifier-circuit/creer-modifier-circuit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { ProgressBarModule } from 'primeng/progressbar';
import { MessageModule } from 'primeng/message';
import { DropdownModule } from 'primeng/dropdown';
import { AppCommonModule } from 'src/app/shared/common/app-common.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PaginatorModule } from 'primeng/paginator';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CircuitComponent } from './circuit.component';
import { DetailsCircuitComponent } from './details-circuit/details-circuit.component';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [
    CircuitComponent,
    CreerModifierCircuitComponent,
    DetailsCircuitComponent
  ],
  imports: [
    CommonModule,
    CircuitRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ButtonModule,
        DynamicDialogModule,
        TableModule,
        CardModule,
        InputTextModule,
        DialogModule,
        DividerModule,
        ProgressBarModule,
        MessageModule,
        DropdownModule,
        AppCommonModule,
        ConfirmDialogModule,
        ProgressSpinnerModule,
        PaginatorModule,
        CheckboxModule
  ],
  providers: [ConfirmationService,MessageService],
})
export class CircuitModule { }
