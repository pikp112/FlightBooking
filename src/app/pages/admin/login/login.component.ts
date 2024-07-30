import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj:any = { 
    "email": "",
    "password": "" 
};
  private httpClient = inject(HttpClient);
  private router = inject(Router);

  onLogin() {
    this.httpClient.post('http://localhost:3000/flight-booking/login', this.loginObj).subscribe((res: any) => {
      if (res.result) {
        localStorage.setItem('flightUser', JSON.stringify(res.data));
        this.router.navigate(['/city']);
      } else {
        alert(res.message);
      }
    });
  }
}
