import {Component, Input} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {cloneDeep} from "lodash";
import {IStructure, Structure} from "../../../../shared/model/structure.model";

@Component({
  selector: 'app-detail-structure',
  templateUrl: './detail-structure.component.html',
  styleUrls: ['./detail-structure.component.scss']
})
export class DetailStructureComponent {
    structure: IStructure = new Structure();
    @Input() data: IStructure = new Structure();

    constructor(
        private dialogRef: DynamicDialogRef,
        private dynamicDialog:  DynamicDialogConfig,
    ) {}

    ngOnInit(): void {
        if (this.dynamicDialog.data) {
            this.structure = cloneDeep(this.dynamicDialog.data);
        }
    }

    clear(): void {
        this.dialogRef.close();
        this.dialogRef.destroy();
    }
}
