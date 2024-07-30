import {Component, Input, ViewChild} from '@angular/core';
import {StructureService} from "../../../../shared/service/structure.service";
import {TypeStructureService} from "../../../../shared/service/type-structure.service";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {ConfirmationService, LazyLoadEvent, Message} from "primeng/api";
import {cloneDeep} from "lodash";
import {ITypeStructure} from "../../../../shared/model/typeStructure.model";
import {IStructure, Structure} from "../../../../shared/model/structure.model";
import {NgForm} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {MinistereService} from "../../../../shared/service/ministere-service";
import {IMinistere} from "../../../../shared/model/ministere.model";

@Component({
  selector: 'app-creer-modifier-structure',
  templateUrl: './creer-modifier-structure.component.html',
  styleUrls: ['./creer-modifier-structure.component.scss']
})
export class CreerModifierStructureComponent {
    @ViewChild('dtf') form!: NgForm;
    structure: IStructure = new Structure();
    @Input() data: IStructure = new Structure();
    structures: IStructure[]=[];
    typeStructures: ITypeStructure[]=[];
    ministeres: IMinistere[] = [];
    error: string | undefined;
    showDialog = false;
    isDialogOpInProgress!: boolean;
    message: any;
    dialogErrorMessage: any;
    timeoutHandle: any;
    isOpInProgress!: boolean;

    structureParent: IStructure = new Structure();

    constructor(
        private structureService: StructureService,
        private typeStructureService: TypeStructureService,
        private dialogRef: DynamicDialogRef,
        private dynamicDialog: DynamicDialogConfig,
        private confirmationService: ConfirmationService,
        private ministereService: MinistereService
    ) { }

    ngOnInit(): void {
        this.loadTypeStructure();
        this.loadMinistere();
        this.loadStructure();
        if (this.dynamicDialog.data) {
            console.warn("this.dynamicDialog.data",this.dynamicDialog.data);
            this.structure.id = this.dynamicDialog.data.structure.id;
            this.structure.parent = this.dynamicDialog.data.structure.parent;
            this.structure.code = this.dynamicDialog.data.structure.code;
            this.structure.libelle = this.dynamicDialog.data.structure.libelle;
            this.structure.ministere= this.dynamicDialog.data.ministere;
            this.structure.type = this.dynamicDialog.data.structure.type
            this.structure.sigle = this.dynamicDialog.data.structure.sigle
            this.structure.responsable = this.dynamicDialog.data.structure.responsable
        }
    }


    loadTypeStructure() {
        this.typeStructureService.findListe().subscribe(response => {
            this.typeStructures = response.body!;
        }, error => {
            this.message = { severity: 'error', summary: error.error };
            console.error(JSON.stringify(error));
        });
    }

    loadMinistere() {
        this.ministereService.findListe().subscribe(response => {
            this.ministeres = response.body!;
            console.warn("MIN",this.ministeres);
        }, error => {
            this.message = { severity: 'error', summary: error.error };
            console.error(JSON.stringify(error));
        });
    }
    loadStructure() {
        this.structureService.findListe().subscribe(response => {
            this.structures = response.body!;
            console.warn("STR",this.structures);
        }, error => {
            this.message = { severity: 'error', summary: error.error };
            console.error(JSON.stringify(error));
        });
    }

    loadStructureByMinistere(id:number) {
this.structureService.findStructureByMinistere(id).subscribe(
    response => {
        this.structures = response.body!;
    }, error => {
        this.message = { severity: 'error', summary: error.error };
        console.error(JSON.stringify(error));
    });
    }


    clear(): void {
        this.form.resetForm();
        this.dialogRef.close();
        this.dialogRef.destroy();
    }
    isEditing() {
        return !!this.structure.id;
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
    saveEntity(): void {
        this.clearDialogMessages();
        this.isDialogOpInProgress = true;
        console.warn("STRUCTURE RECUP",this.structure);
        console.warn("STRUCTURE RECUP",this.structureParent);
        if (this.structure) {
            if (this.structure.id) {
                this.structureService.update(this.structure).subscribe(
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
                this.structureService.create(this.structure).subscribe({
                    next: (response) => {
                        this.dialogRef.close(response);
                        this.dialogRef.destroy();
                        this.showMessage({
                            severity: 'success',
                            summary: 'structure creer avec succès',
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
