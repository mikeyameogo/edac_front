import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotifRoutingModule } from './motif-routing.module';
import { CreerModifierMotifComponent } from './creer-modifier-motif/creer-modifier-motif.component';
import { DetailsMotifComponent } from './details-motif/details-motif.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
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
import { MotifComponent } from './motif.component';
import { MultiSelectModule } from 'primeng/multiselect';


@NgModule({
  declarations: [
    MotifComponent,
    CreerModifierMotifComponent,
    DetailsMotifComponent
    
  ],
  imports: [
    CommonModule,
    MotifRoutingModule,
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
    MultiSelectModule
  ],
  providers: [ConfirmationService,MessageService],
})

export class MotifModule { }
