import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PieceRoutingModule } from './piece-routing.module';
import { PieceComponent } from './piece.component';
import { CreerModifierPieceComponent } from './creer-modifier-piece/creer-modifier-piece.component';
import { DetailsPieceComponent } from './details-piece/details-piece.component';
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


@NgModule({
  declarations: [
    PieceComponent,
    CreerModifierPieceComponent,
    DetailsPieceComponent
  ],
  imports: [
    CommonModule,
    PieceRoutingModule,
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
  ]
})
export class PieceModule { }
