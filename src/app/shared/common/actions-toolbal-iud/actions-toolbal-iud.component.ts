import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-actions-toolbal-iud',
  templateUrl: './actions-toolbal-iud.component.html',
  styleUrls: ['./actions-toolbal-iud.component.scss']
})
export class ActionsToolbalIudComponent implements OnInit {
  @Input() enableBtnInfo!: boolean;
  @Input() enableBtnEdit!: boolean;
  @Input() enableBtnDelete!: boolean;
  @Input() enableBtnValider!: boolean;
  @Input() enableBtnPrivilege?: boolean=false ;
  @Input() enableBtnClose: boolean=false;
  @Input() enableBtnEmail: boolean=false;
  @Input() enableBtnTreat: boolean=false;
  @Input() enableBtnEval: boolean=false;
  @Input() enableBtnChanger: boolean=false;


  @Output() info: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() privilege: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  @Output() email: EventEmitter<any> = new EventEmitter();
  @Output() treat: EventEmitter<any> = new EventEmitter();
  @Output() evaluer: EventEmitter<any> = new EventEmitter();
  @Output() changer: EventEmitter<any> = new EventEmitter();
  @Output() valider: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

   fireInfo() {
    this.info.emit();
  }

  fireEdit() {
    this.edit.emit();
  }

  fireDelete() {
    this.delete.emit();
  }

  firePrivilege() {
    this.privilege.emit();
  }
  fireClose() {
    this.close.emit();
  }
  fireEmail() {
    this.email.emit();
  }

  fireTreat() {
    this.treat.emit();
  }
  fireEvaluer(){
   this.evaluer.emit();
  }
  fireChanger(){
  this.changer.emit();
  }
  fireValider(){
    this.valider.emit();
    }

}
