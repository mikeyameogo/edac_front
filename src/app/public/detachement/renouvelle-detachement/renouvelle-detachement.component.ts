import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-renouvelle-detachement',
  templateUrl: './renouvelle-detachement.component.html',
  styleUrls: ['./renouvelle-detachement.component.scss']
})
export class RenouvelleDetachementComponent {
  constructor(
    private router: Router
  ) { }
  soumettre(){
    this.router.navigate(['/auth/login']);
  }
}
