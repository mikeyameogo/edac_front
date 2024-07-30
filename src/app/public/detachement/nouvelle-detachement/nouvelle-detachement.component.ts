import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-detachement',
  templateUrl: './nouvelle-detachement.component.html',
  styleUrls: ['./nouvelle-detachement.component.scss']
})
export class NouvelleDetachementComponent {
  constructor(
    private router: Router
  ) { }
  soumettre(){
    this.router.navigate(['/auth/login']);
  }
}
