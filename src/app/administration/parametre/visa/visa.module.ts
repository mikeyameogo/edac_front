import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisaRoutingModule } from './visa-routing.module';
import { CreerModifierVisaComponent } from './creer-modifier-visa/creer-modifier-visa.component';
import { DetailsvisaComponent } from './details-visa/details-visa.component';
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
import { VisaComponent } from './visa.component';


@NgModule({
  declarations: [
    CreerModifierVisaComponent,
    DetailsvisaComponent,
    VisaComponent
  ],
  imports: [
    CommonModule,
    VisaRoutingModule,
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

export class VisaModule { }
