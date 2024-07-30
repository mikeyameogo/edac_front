import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { Message } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { IMotif } from 'src/app/shared/model/motif.model';
import { IPiece, Piece } from 'src/app/shared/model/piece.model';
import { MotifService } from 'src/app/shared/service/motif.service';
import { PieceService } from 'src/app/shared/service/piece.service';

@Component({
  selector: 'app-creer-modifier-piece',
  templateUrl: './creer-modifier-piece.component.html',
  styleUrls: ['./creer-modifier-piece.component.scss']
})
export class CreerModifierPieceComponent {

  @ViewChild('dtf') form!: NgForm;
  piece: IPiece = new Piece();
  @Input() data: IPiece = new Piece();
  motifs: IMotif[] = [];
  error: string | undefined;
  showDialog = false;
  isDialogOpInProgress!: boolean;
  message: any;
  dialogErrorMessage: any;
  timeoutHandle: any;
  isOpInProgress!: boolean;

  constructor(
    private pieceService: PieceService,
    private motifService: MotifService,
    private dialogRef: DynamicDialogRef,
    private dynamicDialog: DynamicDialogConfig
  ) { }

  ngOnInit(): void {
    if (this.dynamicDialog.data) {
      this.piece = cloneDeep(this.dynamicDialog.data);
    }
    this.loadMotifs();
  }

  loadMotifs() {
    this.motifService.findListe().subscribe(response => {
        this.motifs = response.body!;
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
    return !!this.piece.id;
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
    if (this.piece) {
      console.log("piece to save ==========", this.piece);
      if (this.piece.id) {
        this.pieceService.update(this.piece).subscribe(
          {
            next: (response) => {
              this.dialogRef.close(response);
              this.dialogRef.destroy();
              this.showMessage({ severity: 'success', summary: 'piece modifié avec succès' });
             
            },
            error: (error) => {
              console.error("error" + JSON.stringify(error));
              this.isOpInProgress = false;
              this.showMessage({ severity: 'error', summary: error.error.message });

            }
          });
      } else {
        this.pieceService.create(this.piece).subscribe({
          next: (response) => {
            this.dialogRef.close(response);
            this.dialogRef.destroy();
            this.showMessage({
              severity: 'success',
              summary: 'piece creer avec succès',
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
