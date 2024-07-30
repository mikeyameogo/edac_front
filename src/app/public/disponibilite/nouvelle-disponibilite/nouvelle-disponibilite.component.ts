import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-disponibilite',
  templateUrl: './nouvelle-disponibilite.component.html',
  styleUrls: ['./nouvelle-disponibilite.component.scss']
})
export class NouvelleDisponibiliteComponent {
  constructor(
    private router: Router
  ) { }
  soumettre(){
    this.router.navigate(['/auth/login']);
  }
}
