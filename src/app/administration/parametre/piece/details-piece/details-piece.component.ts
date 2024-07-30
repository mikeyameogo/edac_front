import { Component, Input } from '@angular/core';
import { cloneDeep } from 'lodash';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { IPiece, Piece } from 'src/app/shared/model/piece.model';

@Component({
  selector: 'app-details-piece',
  templateUrl: './details-piece.component.html',
  styleUrls: ['./details-piece.component.scss']
})
export class DetailsPieceComponent {

  piece: IPiece = new Piece();
  @Input() data: IPiece = new Piece();

  constructor(
    private dialogRef: DynamicDialogRef,
    private dynamicDialog:  DynamicDialogConfig,
) {}

  ngOnInit(): void {
    if (this.dynamicDialog.data) {
      this.piece = cloneDeep(this.dynamicDialog.data);
    }
    }

    clear(): void {
      this.dialogRef.close();
      this.dialogRef.destroy();
  }

}
