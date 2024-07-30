import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatistiqueRoutingModule } from './statistique-routing.module';
import { DividerModule } from 'primeng/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { AdministrationModule } from '../administration/administration.module';
import { DemandeComponent } from './demande/demande.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    DemandeComponent
  ],
  imports: [
    CommonModule,
    StatistiqueRoutingModule,
    ReactiveFormsModule,
    DividerModule,
    FormsModule,
    MessagesModule,
    AdministrationModule,
    ButtonModule,
    TableModule
  ]
})
export class StatistiqueModule { }
