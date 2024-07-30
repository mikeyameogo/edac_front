import {Component, Input, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {ConfirmationService, LazyLoadEvent, Message} from "primeng/api";
import {cloneDeep} from "lodash";
import {HttpErrorResponse} from "@angular/common/http";
import {ITypeDemande, TypeDemande} from "../../../../shared/model/typeDemande.model";
import {TypeDemandeService} from "../../../../shared/service/type-demande.service";
import {Motif} from "../../../../shared/model/motif.model";
import {Article} from "../../../../shared/model/article.model";
import {Visa} from "../../../../shared/model/visa.model";
import {Piece} from "../../../../shared/model/piece.model";
import {Ampliation} from "../../../../shared/model/ampliation.model";
import {AmpliationService} from "../../../../shared/service/ampliation-service.service";
import {ArticleService} from "../../../../shared/service/article.service";
import {VisaService} from "../../../../shared/service/visa-service";
import {MotifService} from "../../../../shared/service/motif.service";

@Component({
  selector: 'app-creer-modifier-type-demande',
  templateUrl: './creer-modifier-type-demande.component.html',
  styleUrls: ['./creer-modifier-type-demande.component.scss']
})
export class CreerModifierTypeDemandeComponent {
    @ViewChild('dtf') form!: NgForm;
    typeDemande: ITypeDemande = new TypeDemande();
    @Input() data: ITypeDemande = new TypeDemande();
    error: string | undefined;
    showDialog = false;
    isDialogOpInProgress!: boolean;
    message: any;
    dialogErrorMessage: any;
    timeoutHandle: any;
    isOpInProgress!: boolean;

    motifs: Motif[] = [];
    articles: Article[] = [];
    visas: Visa[] = [];
    pieces: Piece[] = [];
    ampliations: Ampliation[] = [];
    ampliationsSelected: Ampliation[] = [];
    piecesSelected: Piece[] = [];
    visasSelected: Visa[] = [];
    articlesSelected: Article[] = [];
    motifsSelected: Motif[] = [];
    categories = [{libelle:'DETACHEMENT'},{libelle:'DISPONIBILTE'}];
    categorie?: string;

    constructor(
        private typeStructureService: TypeDemandeService,
        private dialogRef: DynamicDialogRef,
        private dynamicDialog: DynamicDialogConfig,
        private confirmationService: ConfirmationService,
        private ampliationService:AmpliationService,
        private articleService:ArticleService,
        private visaService:VisaService,
        private motifService:MotifService
    ) { }

    ngOnInit(): void {
        this.loadVisas();
        this.loadAricles();
        this.loadAmpliations();
        this.loadMotifs();
        if (this.dynamicDialog.data) {
            this.typeDemande = cloneDeep(this.dynamicDialog.data);
        }
    }
    clear(): void {
        this.form.resetForm();
        this.dialogRef.close();
        this.dialogRef.destroy();
    }
    isEditing() {
        return !!this.typeDemande.id;
    }

    clearDialogMessages() {
        this.dialogErrorMessage = null;
    }
    // Errors

    handleError(error: HttpErrorResponse) {
        console.error(`Processing Error: ${JSON.stringify(error)}`);
        this.isDialogOpInProgress = false;
        this.dialogErrorMessage = error.error.title;
    }

    showMessage(message: Message) {
        this.message = message;
        this.timeoutHandle = setTimeout(() => {
            this.message = null;
        }, 5000);
    }

    loadAmpliations() {
        this.ampliationService.findListe().subscribe(response => {
            this.ampliations = response.body!;
        }, error => {
            this.message = { severity: 'error', summary: error.error };
            console.error(JSON.stringify(error));
        });
    }
    loadAricles() {
        this.articleService.findListe().subscribe(response => {
            this.articles = response.body!;
        }, error => {
            this.message = { severity: 'error', summary: error.error };
            console.error(JSON.stringify(error));
        });
    }

    loadVisas() {
        this.visaService.findListe().subscribe(response => {
            this.visas = response.body!;
        }, error => {
            this.message = { severity: 'error', summary: error.error };
            console.error(JSON.stringify(error));
        });
    }

    loadMotifs() {
        this.motifService.findListe().subscribe(response => {
            this.motifs = response.body!;
        }, error => {
            this.message = { severity: 'error', summary: error.error };
            console.error(JSON.stringify(error));
        });
    }
    saveEntity(): void {
        console.warn("typeDemande",this.typeDemande)
        this.clearDialogMessages();
        this.isDialogOpInProgress = true;
        this.typeDemande.ampliations = this.ampliationsSelected;
        this.typeDemande.visas = this.visasSelected;
        this.typeDemande.articles = this.articlesSelected;
        if (this.typeDemande) {
            if (this.typeDemande.id) {
                this.typeStructureService.update(this.typeDemande).subscribe(
                    {
                        next: (response) => {
                            this.dialogRef.close(response);
                            this.dialogRef.destroy();
                            this.showMessage({ severity: 'success', summary: 'structure modifié avec succès' });

                        },
                        error: (error) => {
                            console.error("error" + JSON.stringify(error));
                            this.isOpInProgress = false;
                            this.showMessage({ severity: 'error', summary: error.error.message });

                        }
                    });
            } else {
                this.typeStructureService.create(this.typeDemande).subscribe({
                    next: (response) => {
                        this.dialogRef.close(response);
                        this.dialogRef.destroy();
                        this.showMessage({
                            severity: 'success',
                            summary: 'type demande creer avec succès',
                        });
                    },
                    error: (error) => {
                        console.error("error" + JSON.stringify(error));
                        this.isOpInProgress = false;
                        this.showMessage({ severity: 'error', summary: error.error.message });

                    }
                });
            }
        }
    }
}
