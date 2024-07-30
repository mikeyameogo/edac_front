import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { ConfirmationService, LazyLoadEvent, Message } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Circuit, ICircuit } from 'src/app/shared/model/circuit.model';
import { CircuitService } from 'src/app/shared/service/circuit.service';

@Component({
  selector: 'app-creer-modifier-circuit',
  templateUrl: './creer-modifier-circuit.component.html',
  styleUrls: ['./creer-modifier-circuit.component.scss']
})
export class CreerModifierCircuitComponent {

  @ViewChild('dtf') form!: NgForm;
  circuit: ICircuit = new Circuit();
  @Input() data: ICircuit = new Circuit();
  circuits: ICircuit[]=[];
  error: string | undefined;
  showDialog = false;
  isDialogOpInProgress!: boolean;
  message: any;
  dialogErrorMessage: any;
  timeoutHandle: any;
  isOpInProgress!: boolean;

  constructor(
    private circuitService: CircuitService,
    private dialogRef: DynamicDialogRef,
    private dynamicDialog: DynamicDialogConfig,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.loadCircuit()
    if (this.dynamicDialog.data) {
      this.circuit = cloneDeep(this.dynamicDialog.data);
    }
  }

  

  loadCircuit(event?: LazyLoadEvent) {
    this.circuitService.findAll().subscribe(response => {
      this.circuits = response.body!;
      console.log("ppp", this.circuits)
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
    return !! this.circuit.id;
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
    if (this.circuit) {
      if (this.circuit.id) {
        this.circuitService.update(this.circuit).subscribe(
          {
            next: (response) => {
              this.dialogRef.close(response);
              this.dialogRef.destroy();
              this.showMessage({ severity: 'success', summary: 'circuit modifié avec succès' });
             
            },
            error: (error) => {
              console.error("error" + JSON.stringify(error));
              this.isOpInProgress = false;
              this.showMessage({ severity: 'error', summary: error.error.message });

            }
          });
      } else {
        this.circuitService.create(this.circuit).subscribe({
          next: (response) => {
            this.dialogRef.close(response);
            this.dialogRef.destroy();
            this.showMessage({
              severity: 'success',
              summary: 'circuit creer avec succès',
            });
            console.log("le circuit", this.circuit);
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