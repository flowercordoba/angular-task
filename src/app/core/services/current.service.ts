import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  private readonly base_url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCurrentUser() {
    return this.http.get(`${this.base_url}/currentuser`);
  }
}
