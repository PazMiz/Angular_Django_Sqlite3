import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  publicViewResponse: any;

  constructor(private http: HttpClient) {}

  callPublicView() {
    this.http.get('http://localhost:8000/public/').subscribe(
      response => {
        this.publicViewResponse = response; // Set the response message
      },
      error => {
        console.error(error); // Handle any errors that occur during the request
      }
    );
  }
}
