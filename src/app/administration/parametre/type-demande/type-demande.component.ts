import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {ITypeDemande, TypeDemande} from "../../../shared/model/typeDemande.model";
import {environment} from "../../../../environments/environment";
import {CURRENT_PAGE, MAX_SIZE_PAGE} from "../../../shared/constants/pagination.constants";
import {ConfirmationService, MenuItem, Message} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {HttpErrorResponse} from "@angular/common/http";
import {TypeDemandeService} from "../../../shared/service/type-demande.service";
import {CreerModifierTypeDemandeComponent} from "./creer-modifier-type-demande/creer-modifier-type-demande.component";
import {DetailTypeDemandeComponent} from "./detail-type-demande/detail-type-demande.component";
import {
    CreerModifierStructureComponent
} from "../structure/creer-modifier-structure/creer-modifier-structure.component";

@Component({
  selector: 'app-type-demande',
  templateUrl: './type-demande.component.html',
  styleUrls: ['./type-demande.component.scss']
})
export class TypeDemandeComponent {
    routeData: Subscription | undefined;
    typeDemandeListSubscription: Subscription | undefined;
    typeDemandes: ITypeDemande[] = [];
    typeDemande: ITypeDemande = new TypeDemande();
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
    predicate!: string;
    ascending!: boolean;
    reverse: any;

    filtreLibelle: string | undefined;
    items: MenuItem[] = [];



    constructor(
        private activatedRoute: ActivatedRoute,
        private dialogService: DialogService,
        private dialogRef: DynamicDialogRef,
        private router: Router,
        private confirmationService: ConfirmationService,
        private typeDemandeService: TypeDemandeService
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
            if (this.typeDemandeListSubscription) {
                this.typeDemandeListSubscription.unsubscribe();
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
        this.typeDemandeService.query(req).subscribe(result => {
            if (result && result.body) {
                this.totalRecords = Number(result.headers.get('X-Total-Count'));
                this.typeDemandes = result.body || [];
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
    /** Permet d'afficher un modal pour l'ajout */
    openModalCreate(): void {
        this.dialogService.open(CreerModifierTypeDemandeComponent,
            {
                header: 'Ajouter une type Demande',
                width: '60%',
                contentStyle: { overflow: 'auto', },
                baseZIndex: 10000,
                maximizable: true,
                closable: true,
            }
        ).onClose.subscribe(result => {
            if(result) {
                this.typeDemandes.push(result);
                this.isDialogOpInProgress = false;
                this.showMessage({ severity: 'success', summary: 'Structure créée avec succès' });
            }
        });
    }

    /** Permet d'afficher un modal pour la modification */
    openModalEdit(typeDemande: ITypeDemande): void {
        this.dialogService.open(CreerModifierTypeDemandeComponent,
            {
                header: 'Modifier un type demande',
                width: '60%',
                contentStyle: { overflow: 'auto' },
                baseZIndex: 10000,
                maximizable: true,
                closable: true,
                data: typeDemande
            }).onClose.subscribe(result => {
            if(result){
                this.isDialogOpInProgress = false;
                this.loadAll();
                this.showMessage({ severity: 'success', summary: 'Structure modifiée avec succès' });
            }

        });

    }

    /** Permet d'afficher un modal pour voir les détails */
    openModalDetail(typeDemande:ITypeDemande): void {
        this.dialogService.open(DetailTypeDemandeComponent,
            {
                header: 'Details de typeDemande',
                width: '60%',
                contentStyle: { overflow: 'auto' },
                baseZIndex: 10000,
                maximizable: true,
                data: typeDemande
            });
    }


    // Deletion
    onDelete(typeDemande: ITypeDemande) {
        this.confirmationService.confirm({
            message: 'Etes-vous sur de vouloir supprimer ce typeDemande?',
            accept: () => {
                this.delete(typeDemande);
            }
        });
    }

    delete(selection: any) {
        this.isOpInProgress = true;
        this.typeDemandeService.delete(selection.id).subscribe(() => {
            this.typeDemandes = this.typeDemandes.filter(typeDemande => typeDemande.id !== selection.id);
            selection = null;
            this.isOpInProgress = false;
            this.totalRecords--;
            this.showMessage({
                severity: 'success',
                summary: 'Type demande supprimé avec succès',
            });
        }, (error) => {
            console.error("typeDemande " + JSON.stringify(error));
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
