import { Component, Input } from '@angular/core';
import { cloneDeep } from 'lodash';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ICorps, Corps } from 'src/app/shared/model/corps.model';

@Component({
  selector: 'app-details-corps',
  templateUrl: './details-corps.component.html',
  styleUrls: ['./details-corps.component.scss']
})
export class DetailsCorpsComponent {

  corps: ICorps = new Corps();
  @Input() data: ICorps = new Corps();

  constructor(
    private dialogRef: DynamicDialogRef,
    private dynamicDialog:  DynamicDialogConfig,
) {}

  ngOnInit(): void {
    if (this.dynamicDialog.data) {
      this.corps = cloneDeep(this.dynamicDialog.data);
    }
    }

    clear(): void {
      this.dialogRef.close();
      this.dialogRef.destroy();
  }
}
