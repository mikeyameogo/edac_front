import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmpliationRoutingModule } from './ampliation-routing.module';
import { CreerModifierAmpliationComponent } from './creer-modifier-ampliation/creer-modifier-ampliation.component';
import { DetailsAmpliationComponent } from './details-ampliation/details-ampliation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { AppCommonModule } from 'src/app/shared/common/app-common.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AmpliationComponent } from './ampliation.component';


@NgModule({
  declarations: [
    AmpliationComponent,
    CreerModifierAmpliationComponent,
    DetailsAmpliationComponent
  ],
  imports: [
    CommonModule,
    AmpliationRoutingModule,
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
    PaginatorModule
  ],
  providers: [ConfirmationService,MessageService],
})
export class AmpliationModule { }
