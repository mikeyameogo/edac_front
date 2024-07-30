import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annulation-disponibilite',
  templateUrl: './annulation-disponibilite.component.html',
  styleUrls: ['./annulation-disponibilite.component.scss']
})
export class AnnulationDisponibiliteComponent {
  constructor(
    private router: Router
  ) { }
  soumettre(){
    this.router.navigate(['/auth/login']);
  }
}
