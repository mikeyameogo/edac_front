import { Component, Input } from '@angular/core';
import { cloneDeep } from 'lodash';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Ampliation, IAmpliation } from 'src/app/shared/model/ampliation.model';

@Component({
  selector: 'app-details-ampliation',
  templateUrl: './details-ampliation.component.html',
  styleUrls: ['./details-ampliation.component.scss']
})
export class DetailsAmpliationComponent {

  ampliation: IAmpliation = new Ampliation();
  @Input() data: IAmpliation = new Ampliation();

  constructor(
    private dialogRef: DynamicDialogRef,
    private dynamicDialog:  DynamicDialogConfig,
) {}

  ngOnInit(): void {
    if (this.dynamicDialog.data) {
      this.ampliation = cloneDeep(this.dynamicDialog.data);
    }
    }

    clear(): void {
      this.dialogRef.close();
      this.dialogRef.destroy();
  }
}
