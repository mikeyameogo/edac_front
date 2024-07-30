import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fin-disponibilite',
  templateUrl: './fin-disponibilite.component.html',
  styleUrls: ['./fin-disponibilite.component.scss']
})
export class FinDisponibiliteComponent {
  constructor(
    private router: Router
  ) { }
  soumettre(){
    this.router.navigate(['/auth/login']);
  }
}
