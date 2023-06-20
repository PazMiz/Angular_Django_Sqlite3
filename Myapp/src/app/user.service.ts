import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://127.0.0.1:8000/'; // Update the URL to match your Django API endpoint

  constructor(private http: HttpClient) { }

  registerUser(username: string, password: string) {
    const body = {
      username: username,
      password: password
    };

    return this.http.post<any>(`${this.apiUrl}register/`, body);
  }
}
