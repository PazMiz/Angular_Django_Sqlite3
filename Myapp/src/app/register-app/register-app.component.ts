import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register-app.component.html',
  styleUrls: ['./register-app.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  registrationMessage: string = '';

  constructor(private userService: UserService) { }

  registerUser() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    if (this.username.trim().length < 5 || this.password.trim().length < 5) {
      console.log('Validation failed.');
      this.registrationMessage = 'Username and password must be at least 5 characters long.';
      return;
    }

    this.userService.registerUser(this.username, this.password).subscribe(
      response => {
        console.log(response); // Handle the response from the API
        this.registrationMessage = 'Registration successful!';
      },
      error => {
        console.error(error); // Handle any errors that occur during the request
        this.registrationMessage = 'Registration failed. Please try again.';
      }
    );
  }
}
