import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rectification-detachement',
  templateUrl: './rectification-detachement.component.html',
  styleUrls: ['./rectification-detachement.component.scss']
})
export class RectificationDetachementComponent {
  constructor(
    private router: Router
  ) { }
  soumettre(){
    this.router.navigate(['/auth/login']);
  }
}
