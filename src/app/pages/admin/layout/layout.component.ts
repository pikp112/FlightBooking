import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  loggedUserData: any;
  private router = inject(Router);

  constructor() {
    const locatData = localStorage.getItem('flightUser');
    if (locatData) {
      this.loggedUserData = JSON.parse(locatData);
    }
  }

  logOff() {
    localStorage.removeItem('flightUser');
    this.loggedUserData = null;

    this.router.navigateByUrl('/login');
  }
}
