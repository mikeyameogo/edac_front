import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {environment} from "../../../../environments/environment";
import {CURRENT_PAGE, MAX_SIZE_PAGE} from "../../../shared/constants/pagination.constants";
import {ConfirmationService, MenuItem, Message} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";

import {HttpErrorResponse} from "@angular/common/http";
import {DetailTypeStructureComponent} from "./detail-type-structure/detail-type-structure.component";
import {TypeStructureService} from "../../../shared/service/type-structure.service";
import {IStructure, Structure} from "../../../shared/model/structure.model";
import {
    CreerModifierTypeStructureComponent
} from "./creer-modifier-type-structure/creer-modifier-type-structure.component";

@Component({
  selector: 'app-type-structure',
  templateUrl: './type-structure.component.html',
  styleUrls: ['./type-structure.component.scss']
})
export class TypeStructureComponent {
    routeData: Subscription | undefined;
    typeStructureListSubscription: Subscription | undefined;
    typeStructures: IStructure[] = [];
    typeStructure: IStructure = new Structure();
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
        private typeStructureService: TypeStructureService
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
            if (this.typeStructureListSubscription) {
                this.typeStructureListSubscription.unsubscribe();
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
        this.typeStructureService.query(req).subscribe(result => {
            if (result && result.body) {
                this.totalRecords = Number(result.headers.get('X-Total-Count'));
                this.typeStructures = result.body || [];
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
        this.dialogService.open(CreerModifierTypeStructureComponent,
            {
                header: 'Ajouter  type Structure',
                width: '60%',
                contentStyle: { overflow: 'auto', },
                baseZIndex: 10000,
                maximizable: true,
                closable: true,
            }
        ).onClose.subscribe(result => {
            if(result) {
                this.typeStructures.push(result);
                this.loadAll();
                this.isDialogOpInProgress = false;
                this.showMessage({ severity: 'success', summary: 'Structure créée avec succès' });
            }
        });
    }

    /** Permet d'afficher un modal pour la modification */
    openModalEdit(typeStructure: IStructure): void {
        this.dialogService.open(CreerModifierTypeStructureComponent,
            {
                header: 'Modifier un type Structure',
                width: '60%',
                contentStyle: { overflow: 'auto' },
                baseZIndex: 10000,
                maximizable: true,
                closable: true,
                data: typeStructure
            }).onClose.subscribe(result => {
            if(result){
                this.isDialogOpInProgress = false;
                this.loadAll();
                this.showMessage({ severity: 'success', summary: 'Structure modifiée avec succès' });
            }

        });

    }

    /** Permet d'afficher un modal pour voir les détails */
    openModalDetail(typeStructure:IStructure): void {
        this.dialogService.open(DetailTypeStructureComponent,
            {
                header: 'Details de typeStructure',
                width: '60%',
                contentStyle: { overflow: 'auto' },
                baseZIndex: 10000,
                maximizable: true,
                data: typeStructure
            });
    }


    // Deletion
    onDelete(typeStructure: IStructure) {
        this.confirmationService.confirm({
            message: 'Etes-vous sur de vouloir supprimer ce type Structure?',
            accept: () => {
                this.delete(typeStructure);
            }
        });
    }

    delete(selection: any) {
        this.isOpInProgress = true;
        this.typeStructureService.delete(selection.id).subscribe(() => {
            this.typeStructures = this.typeStructures.filter(typeStructure => typeStructure.id !== selection.id);
            selection = null;
            this.isOpInProgress = false;
            this.totalRecords--;
            this.showMessage({
                severity: 'success',
                summary: 'Structure supprimée avec succès',
            });
        }, (error) => {
            console.error("typeStructure " + JSON.stringify(error));
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
