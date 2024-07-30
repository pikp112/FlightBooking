import { Component, inject } from '@angular/core';
import { MasterService } from '../../../core/services/master.service';

@Component({
  selector: 'app-website-landing',
  templateUrl: './website-landing.component.html',
  styleUrl: './website-landing.component.css'
})
export class WebsiteLandingComponent {
  loggedUserData: any;
  registerObj:any = {
    "name": "",
    "mobileNo": "",
    "email": "",
    "city": "",
    "address": "",
    "password": ""
  };
  loginObj: any ={
    "email": "string",
    "password": "string"
  }
  private masterService = inject(MasterService);

  constructor(){
    this.loggedUserData = JSON.parse(localStorage.getItem('floghtCustomer'));
  }

  logOff(){
    localStorage.removeItem('user');
    this.loggedUserData = null;
  }

  openRegister(){
    const model = document.getElementById('registerModel');
    if (model != null){
      model.style.display = 'block';
    }
  }

  closeRegister(){
    const model = document.getElementById('registerModel');
    if (model != null){
      model.style.display = 'none';
    }
  }

  openLogin(){
    const model = document.getElementById('loginModel');
    if (model != null){
      model.style.display = 'block';
    }
  }
  closeLogin(){
    const model = document.getElementById('loginModel');
    if (model != null){
      model.style.display = 'none';
    }
  }

  onSave(){
    this.masterService.register(this.registerObj).subscribe((res:any) => {
      if (res.result){
        alert('User registered successfully');
        this.closeRegister();
      } else {
        alert(res.message);
      }
    });
  }
  onLogin(){
    this.masterService.login(this.loginObj).subscribe((res:any) => {
      if (res.result){
        alert('User logged in successfully');
        localStorage.setItem('user', JSON.stringify(res.data));
        this.loggedUserData = res.data;
        this.closeLogin();
      } else {
        alert(res.message);
      }
    });
  }
}
