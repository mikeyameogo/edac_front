import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { ConfirmationService, Message, SelectItem } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { IMotif, Motif } from 'src/app/shared/model/motif.model';
// import { ECategorie, IMotif, Motif } from 'src/app/shared/model/motif.model';
import { IPiece, Piece } from 'src/app/shared/model/piece.model';
import { ITypeDemandeur } from 'src/app/shared/model/typeDemandeur.model';
import { MotifService } from 'src/app/shared/service/motif.service';
import { PieceService } from 'src/app/shared/service/piece.service';
import {Duree, IDuree} from "../../../../shared/model/duree.model";

@Component({
  selector: 'app-creer-modifier-motif',
  templateUrl: './creer-modifier-motif.component.html',
  styleUrls: ['./creer-modifier-motif.component.scss']
})
export class CreerModifierMotifComponent {

  @ViewChild('dtf') form!: NgForm;
  motif: IMotif = new Motif();
  dure: IDuree = new Duree();
  @Input() data: IMotif = new Motif();
  motifs: IMotif[]=[];
  error: string | undefined;
  showDialog = false;
  isDialogOpInProgress!: boolean;
  message: any;
  dialogErrorMessage: any;
  timeoutHandle: any;
  isOpInProgress!: boolean;
  pieces: IPiece[] = [];
  pieceSelected: Piece[] = [];
    categSelected: any;
    typeDemandeurs: ITypeDemandeur[]=[{
      code:'AGENT',
      libelle: 'AGENT'
  },
  {
      code:'STRUCTURE',
      libelle: 'STRUCTURE'
  }];


  constructor(
    private motifService: MotifService,
    private pieceService: PieceService,
    private dialogRef: DynamicDialogRef,
    private dynamicDialog: DynamicDialogConfig,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
   this.loadPieces();
    if (this.dynamicDialog.data) {
      this.motif = cloneDeep(this.dynamicDialog.data);
      console.warn("MMM",this.motif);
    }
  }


  clear(): void {
    this.form.resetForm();
    this.dialogRef.close();
    this.dialogRef.destroy();
  }
  isEditing() {
    return !!this.motif.id;
  }

  clearDialogMessages() {
    this.dialogErrorMessage = null;
  }

  loadPieces() {
    this.pieceService.findListe().subscribe(response => {
        this.pieces = response.body!;
    }, error => {
        this.message = { severity: 'error', summary: error.error };
        console.error(JSON.stringify(error));
    });
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
      this.motif.dureeMax = this.dure;
      this.motif.typeDemandeur = this.motif.typeDemandeurDto?.libelle;
      console.warn("MOTIF",this.motif);
    this.clearDialogMessages();
    this.isDialogOpInProgress = true;
    if (this.motif) {
      if (this.motif.id) {
        this.motifService.update(this.motif).subscribe(
          {
            next: (response) => {
              this.dialogRef.close(response);
              this.dialogRef.destroy();
              this.showMessage({ severity: 'success', summary: 'motif modifié avec succès' });

            },
            error: (error) => {
              console.error("error" + JSON.stringify(error));
              this.isOpInProgress = false;
              this.showMessage({ severity: 'error', summary: error.error.message });

            }
          });
      } else {
        this.motifService.create(this.motif).subscribe({
          next: (response) => {
            this.dialogRef.close(response);
            this.dialogRef.destroy();
            this.showMessage({
              severity: 'success',
              summary: 'motif creer avec succès',
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
