import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MenuItem, Message } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { CURRENT_PAGE, MAX_SIZE_PAGE } from 'src/app/shared/constants/pagination.constants';
import { Ampliation, IAmpliation } from 'src/app/shared/model/ampliation.model';
import { AmpliationService } from 'src/app/shared/service/ampliation-service.service';
import { environment } from 'src/environments/environment';
import { CreerModifierAmpliationComponent } from './creer-modifier-ampliation/creer-modifier-ampliation.component';
import { DetailsAmpliationComponent } from './details-ampliation/details-ampliation.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ampliation',
  templateUrl: './ampliation.component.html',
  styleUrls: ['./ampliation.component.scss']
})
export class AmpliationComponent {
  routeData: Subscription | undefined;
  ampliationListSubscription: Subscription | undefined;
  ampliations: IAmpliation[] = [];
  ampliation: IAmpliation = new Ampliation();
  timeoutHandle: any;
  totalRecords: number = 0;
  recordsPerPage = environment.recordsPerPage;
  enableBtnInfo = true;
  enableBtnEdit = true;
  enableBtnDelete=true;
  isLoading!: boolean;
  isOpInProgress!: boolean;
  isDialogOpInProgress!: boolean;
  showDialog = false;
  regionDetail: boolean=false;
  message: any;
  dialogErrorMessage: any;
  enableCreate = true;

  page = CURRENT_PAGE;
  previousPage?: number;
  maxSize = MAX_SIZE_PAGE;
  //itemsPerPage = ITEMS_PER_PAGE2;
  predicate!: string;
  ascending!: boolean;
  reverse: any;

  filtreLibelle: string | undefined;
  items: MenuItem[] = [];

  

  constructor(
    private ampliationService: AmpliationService,
    private activatedRoute: ActivatedRoute,
    private dialogService: DialogService,
    private dialogRef: DynamicDialogRef,
    private router: Router,
    private confirmationService: ConfirmationService
    ){}


   ngOnInit(): void { 
        this.activatedRoute.data.subscribe(
          () => {
            this.loadAll();
          }
        );
        
      }

      ngOnDestroy(): void {
        if (this.routeData) {
          this.routeData.unsubscribe();
          if (this.ampliationListSubscription) {
            this.ampliationListSubscription.unsubscribe();
          }
        }
      }

      filtrer(): void {
        this.loadAll();
      }
    
      resetFilter(): void {
        this.filtreLibelle = undefined;
        this.filtrer();
      }

      loadPage(event:any): void {
        if(event){
          this.page = event.first/event.rows + 1; 
          this.recordsPerPage = event.rows;
        }
        this.transition();
      }
    
      transition(): void {
        this.router.navigate(['./'], {
          relativeTo: this.activatedRoute.parent,
          queryParams: {
            page: this.page,
            sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc'),
          },
        });
        this.loadAll();
      }

      loadAll(): void {
        const req = this.buildReq();
        this.ampliationService.query(req).subscribe(result => {
          if (result && result.body) {
            this.totalRecords = Number(result.headers.get('X-Total-Count'));
            this.ampliations = result.body || [];
          }
        });
      }
      
        
      sortMethod(): string[] {
        this.predicate = 'id';
        this.reverse = true;
        const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        return result;
      }

      buildReq(): any {
        let req = {
          page: this.page -1,
          size: this.recordsPerPage,
          sort: this.sortMethod(),
        };
        let obj : any;
        if (this.filtreLibelle) {
          obj = {};
          obj['libelle.contains'] = this.filtreLibelle;
          req = Object.assign({}, req, obj);
        }
        return req;
      }

      // load(event?: LazyLoadEvent): void {
      //   this.isLoading = true;
      //   this.ampliationService.findAll(event).subscribe(
      //     {
      //       next: (result) => {
      //         if (result && result.body) {
      //           this.isLoading = false;
      //           this.ampliations = result.body!;
      //         }
      //       },
      //       error: (reason) => {
      //         this.message = { severity: 'error', summary: reason.error };
      //         console.error(JSON.stringify(reason));
      //       }
      //     });
      // }

      /** Permet d'afficher un modal pour l'ajout */
      openModalCreate(): void {
        this.dialogService.open(CreerModifierAmpliationComponent,
          {
            header: 'Ajouter une ampliation',
            width: '60%',
            contentStyle: { overflow: 'auto', },
            baseZIndex: 10000,
            maximizable: true,
            closable: true,
          }
        ).onClose.subscribe(result => {
          if(result) {
          this.ampliations.push(result);
          this.loadAll();
          this.isDialogOpInProgress = false;
          this.showMessage({ severity: 'success', summary: 'ampliation créée avec succès' });
          }
        });
      }

      /** Permet d'afficher un modal pour la modification */
      openModalEdit(ampliation: IAmpliation): void {
        this.dialogService.open(CreerModifierAmpliationComponent,
          {
            header: 'Modifier un ampliation',
            width: '60%',
            contentStyle: { overflow: 'auto' },
            baseZIndex: 10000,
            maximizable: true,
            closable: true,
            data: ampliation
          }).onClose.subscribe(result => {
            if(result){
              this.isDialogOpInProgress = false;
              this.loadAll();
              this.showMessage({ severity: 'success', summary: 'ampliation modifiée avec succès' });
            }
           
          });

      }

      /** Permet d'afficher un modal pour voir les détails */
      openModalDetail(ampliation:IAmpliation): void {
        this.dialogService.open(DetailsAmpliationComponent,
          {
            header: 'Details de ampliation',
            width: '60%',
            contentStyle: { overflow: 'auto' },
            baseZIndex: 10000,
            maximizable: true,
            data: ampliation
          });
      }


      // Deletion
      onDelete(ampliation: IAmpliation) {
        this.confirmationService.confirm({
          message: 'Etes-vous sur de vouloir supprimer ce ampliation?',
          accept: () => {
            this.delete(ampliation);
          }
        });
      }

      delete(selection: any) {
        this.isOpInProgress = true;
        this.ampliationService.delete(selection.id).subscribe(() => {
          this.ampliations = this.ampliations.filter(ampliation => ampliation.id !== selection.id);
          selection = null;
          this.isOpInProgress = false;
          this.totalRecords--;
          this.showMessage({
            severity: 'success',
            summary: 'ampliation supprimée avec succès',
          });
        }, (error) => {
          console.error("ampliation " + JSON.stringify(error));
          this.isOpInProgress = false;
          this.showMessage({ severity: 'error', summary: error.error.message });
        });
      }
      // Errors
      handleError(error: HttpErrorResponse) {
        console.error(`Processing Error: ${JSON.stringify(error)}`);
        this.isDialogOpInProgress = false;
        this.dialogErrorMessage = error.error.title;
      }
      // Messages

      clearDialogMessages() {
        this.dialogErrorMessage = null;
      }

      showMessage(message: Message) {
        this.message = message;
        this.timeoutHandle = setTimeout(() => {
          this.message = null;
        }, 5000);
      }
}
