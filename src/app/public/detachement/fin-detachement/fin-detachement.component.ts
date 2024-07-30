import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fin-detachement',
  templateUrl: './fin-detachement.component.html',
  styleUrls: ['./fin-detachement.component.scss']
})
export class FinDetachementComponent {
  constructor(
    private router: Router
  ) { }
  soumettre(){
    this.router.navigate(['/auth/login']);
  }
}
