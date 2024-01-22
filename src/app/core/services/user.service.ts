import { Injectable, NgZone } from "@angular/core";
import { tap } from "rxjs";
import { LoginForm } from "../interfaces/login-form.interface";
import { RegisterForm } from "../interfaces/register-form.interface";
import { environment } from "src/environments/environments";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})

export class UserService {
  private readonly base_url = environment.baseUrl;
  constructor(
    private http: HttpClient,
    private router: Router,
    private ngZone: NgZone
    ) {} 

  
  public auth2: any;

  crearUsuario(formData: RegisterForm) {
    return this.http.post(`${this.base_url}/auth/register`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem("token", resp.token);
      })
    );
  }

  login(formData: LoginForm) {
    return this.http.post(`${this.base_url}/auth/login`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem("token", resp.token);
      })
    );
  }
  logout() {
    localStorage.removeItem('token');

    this.auth2.signOut().then(() => {

      this.ngZone.run(() => {
        this.router.navigateByUrl('/login');
      })
    });

  }

}
