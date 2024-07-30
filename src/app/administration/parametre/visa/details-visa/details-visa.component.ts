import { Component, Input } from '@angular/core';
import { cloneDeep } from 'lodash';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IVisa, Visa } from 'src/app/shared/model/visa.model';

@Component({
  selector: 'app-details-visa',
  templateUrl: './details-visa.component.html',
  styleUrls: ['./details-visa.component.scss']
})
export class DetailsvisaComponent {

  visa: IVisa = new Visa();
  @Input() data: IVisa = new Visa();

  constructor(
    private dialogRef: DynamicDialogRef,
    private dynamicDialog:  DynamicDialogConfig,
) {}

  ngOnInit(): void {
    if (this.dynamicDialog.data) {
      this.visa = cloneDeep(this.dynamicDialog.data);
    }
    }

    clear(): void {
      this.dialogRef.close();
      this.dialogRef.destroy();
  }
}
