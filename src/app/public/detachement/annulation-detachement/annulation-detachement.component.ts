import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annulation-detachement',
  templateUrl: './annulation-detachement.component.html',
  styleUrls: ['./annulation-detachement.component.scss']
})
export class AnnulationDetachementComponent {
  constructor(
    private router: Router
  ) { }
  soumettre(){
    this.router.navigate(['/auth/login']);
  }
}
