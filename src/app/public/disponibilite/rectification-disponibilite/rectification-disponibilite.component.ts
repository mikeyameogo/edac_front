import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rectification-disponibilite',
  templateUrl: './rectification-disponibilite.component.html',
  styleUrls: ['./rectification-disponibilite.component.scss']
})
export class RectificationDisponibiliteComponent {
  constructor(
    private router: Router
  ) { }
  soumettre(){
    this.router.navigate(['/auth/login']);
  }
}
