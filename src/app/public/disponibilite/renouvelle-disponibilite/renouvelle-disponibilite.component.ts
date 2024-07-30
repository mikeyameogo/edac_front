import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-renouvelle-disponibilite',
  templateUrl: './renouvelle-disponibilite.component.html',
  styleUrls: ['./renouvelle-disponibilite.component.scss']
})
export class RenouvelleDisponibiliteComponent {
  constructor(
    private router: Router
  ) { }
  soumettre(){
    this.router.navigate(['/auth/login']);
  }
}
