import { Component, Input } from '@angular/core';
import { cloneDeep } from 'lodash';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Circuit, ICircuit } from 'src/app/shared/model/circuit.model';

@Component({
  selector: 'app-details-circuit',
  templateUrl: './details-circuit.component.html',
  styleUrls: ['./details-circuit.component.scss']
})
export class DetailsCircuitComponent {
  circuit: ICircuit = new Circuit();
  @Input() data: ICircuit = new Circuit();

  constructor(
    private dialogRef: DynamicDialogRef,
    private dynamicDialog:  DynamicDialogConfig,
) {}

  ngOnInit(): void {
    if (this.dynamicDialog.data) {
      this.circuit = cloneDeep(this.dynamicDialog.data);
    }
    }

    clear(): void {
      this.dialogRef.close();
      this.dialogRef.destroy();
  }

}
