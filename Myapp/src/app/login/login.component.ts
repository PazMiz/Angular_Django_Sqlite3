import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: any;
  password: any;
  loginMessage: any;

  constructor(private http: HttpClient, private router: Router) { }

  login() {
    const body = {
      username: this.username,
      password: this.password
    };

    this.http.post<any>('http://127.0.0.1:8000/login/', body).subscribe(
      response => {
        localStorage.setItem('token', response.access);
        this.loginMessage = 'Login successful , This is an admin-only view and only paz can reach it!!'; // Set the success message
        this.router.navigate(['/']);
      },
      error => {
        console.error(error);
        this.loginMessage = 'Login failed. Please try again or maybe youre not In Paz Company!!.'; // Set the error message
      }
    );
  }



  
}
