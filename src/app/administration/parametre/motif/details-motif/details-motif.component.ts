import { Component, Input } from '@angular/core';
import { cloneDeep } from 'lodash';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { IMotif, Motif } from 'src/app/shared/model/motif.model';

@Component({
  selector: 'app-details-motif',
  templateUrl: './details-motif.component.html',
  styleUrls: ['./details-motif.component.scss']
})
export class DetailsMotifComponent {

  
  motif: IMotif = new Motif();
  @Input() data: IMotif = new Motif();

  constructor(
    private dialogRef: DynamicDialogRef,
    private dynamicDialog:  DynamicDialogConfig,
) {}

  ngOnInit(): void {
    if (this.dynamicDialog.data) {
      this.motif = cloneDeep(this.dynamicDialog.data);
    }
    }

    clear(): void {
      this.dialogRef.close();
      this.dialogRef.destroy();
  }
}
