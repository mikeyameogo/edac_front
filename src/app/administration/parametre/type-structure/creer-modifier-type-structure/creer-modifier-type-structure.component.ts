import {Component, Input, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {TypeStructureService} from "../../../../shared/service/type-structure.service";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {ConfirmationService, LazyLoadEvent, Message} from "primeng/api";
import {cloneDeep} from "lodash";
import {HttpErrorResponse} from "@angular/common/http";
import {ITypeStructure, TypeStructure} from "../../../../shared/model/typeStructure.model";

@Component({
  selector: 'app-creer-modifier-type-structure',
  templateUrl: './creer-modifier-type-structure.component.html',
  styleUrls: ['./creer-modifier-type-structure.component.scss']
})
export class CreerModifierTypeStructureComponent {
    @ViewChild('dtf') form!: NgForm;
    typeStructure: ITypeStructure = new TypeStructure();
    @Input() data: ITypeStructure = new TypeStructure();
    error: string | undefined;
    showDialog = false;
    isDialogOpInProgress!: boolean;
    message: any;
    dialogErrorMessage: any;
    timeoutHandle: any;
    isOpInProgress!: boolean;

    constructor(
        private typeStructureService: TypeStructureService,
        private dialogRef: DynamicDialogRef,
        private dynamicDialog: DynamicDialogConfig,
        private confirmationService: ConfirmationService
    ) { }

    ngOnInit(): void {
        if (this.dynamicDialog.data) {
            this.typeStructure = cloneDeep(this.dynamicDialog.data);
        }
    }

    clear(): void {
        this.form.resetForm();
        this.dialogRef.close();
        this.dialogRef.destroy();
    }
    isEditing() {
        return !!this.typeStructure.id;
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
        if (this.typeStructure) {
            if (this.typeStructure.id) {
                this.typeStructureService.update(this.typeStructure).subscribe(
                    {
                        next: (response) => {
                            this.dialogRef.close(response);
                            this.dialogRef.destroy();
                            this.showMessage({ severity: 'success', summary: 'typeStructure modifié avec succès' });

                        },
                        error: (error) => {
                            console.error("error" + JSON.stringify(error));
                            this.isOpInProgress = false;
                            this.showMessage({ severity: 'error', summary: error.error.message });

                        }
                    });
            } else {
                this.typeStructureService.create(this.typeStructure).subscribe({
                    next: (response) => {
                        this.dialogRef.close(response);
                        this.dialogRef.destroy();
                        this.showMessage({
                            severity: 'success',
                            summary: 'typeStructure creer avec succès',
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
