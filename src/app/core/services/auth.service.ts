import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly base_url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  register(userData: { name: string; email: string; password: string }) {
    return this.http.post(`${this.base_url}/auth/register`, userData);
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.base_url}/auth/login`, credentials);
  }
  signOut() {
    return this.http.get(`${this.base_url}/signout`);
  }
}
