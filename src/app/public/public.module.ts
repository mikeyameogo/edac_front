import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { AnimateEnterDirective } from './animateenter.directive'; 

import { PublicRoutingModule } from './public-routing.module';
import { DashboardPublicComponent } from './dashboard-public.component';
import { PublicMenuComponent } from './public-menu/public-menu.component';
import { PublicFooterComponent } from './public-footer/public-footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenubarModule } from 'primeng/menubar';
import { AccountRoutingModule } from '../account/account-routing.module';
import { NouvelleDetachementComponent } from './detachement/nouvelle-detachement/nouvelle-detachement.component';
import { RenouvelleDetachementComponent } from './detachement/renouvelle-detachement/renouvelle-detachement.component';
import { FinDetachementComponent } from './detachement/fin-detachement/fin-detachement.component';
import { RectificationDetachementComponent } from './detachement/rectification-detachement/rectification-detachement.component';
import { AnnulationDetachementComponent } from './detachement/annulation-detachement/annulation-detachement.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { ProgressBarModule } from 'primeng/progressbar';
import { TooltipModule } from 'primeng/tooltip';
import { AppCommonModule } from '../shared/common/app-common.module';
import { StepsModule } from 'primeng/steps';
import { AccountComponent } from './account/account.component';
import { NouvelleDisponibiliteComponent } from './disponibilite/nouvelle-disponibilite/nouvelle-disponibilite.component';
import { RenouvelleDisponibiliteComponent } from './disponibilite/renouvelle-disponibilite/renouvelle-disponibilite.component';
import { FinDisponibiliteComponent } from './disponibilite/fin-disponibilite/fin-disponibilite.component';
import { RectificationDisponibiliteComponent } from './disponibilite/rectification-disponibilite/rectification-disponibilite.component';
import { AnnulationDisponibiliteComponent } from './disponibilite/annulation-disponibilite/annulation-disponibilite.component';
import { ContactezNousComponent } from './contactez-nous/contactez-nous.component';

@NgModule({
  declarations: [
    AccountComponent,
    AnimateEnterDirective,
    DashboardPublicComponent,
    PublicMenuComponent,
    PublicFooterComponent,
    HomePageComponent,
    NouvelleDetachementComponent,
    RenouvelleDetachementComponent,
    FinDetachementComponent,
    RectificationDetachementComponent,
    AnnulationDetachementComponent,
    NouvelleDisponibiliteComponent,
    RenouvelleDisponibiliteComponent,
    FinDisponibiliteComponent,
    RectificationDisponibiliteComponent,
    AnnulationDisponibiliteComponent,
    ContactezNousComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule,
    StyleClassModule,
    DividerModule,
    ProgressBarModule,
    TooltipModule,
    PasswordModule,
    FieldsetModule,
    InputNumberModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    AppCommonModule,
    StepsModule,
    FormsModule ,
    MenubarModule,
    CardModule,
    MessageModule,
    DropdownModule,
    CalendarModule,
    PublicRoutingModule,
    MenubarModule,
    AccountRoutingModule
  ]
})
export class PublicModule { }
