import { Injectable, NgZone } from "@angular/core";
import { Observable, catchError, map, of, tap } from "rxjs";
import { LoginForm } from "../interfaces/login-form.interface";
import { RegisterForm } from "../interfaces/register-form.interface";
import { environment } from "src/environments/environments";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { UserModel } from "../models/user.model";

@Injectable({
  providedIn: "root",
})

export class UserService {
  private readonly base_url = environment.baseUrl;
  token!: string | string[];
  public auth2: any;
  public usuario:UserModel | undefined;
  constructor(
    private http: HttpClient,
    private router: Router,
    private ngZone: NgZone
    ) {} 

  

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

      this.router.navigateByUrl('/auth/login');

    });

  }
  
  validarToken(): Observable<boolean> {
    
    return this.http.get(`${ this.base_url }/user/profile`, {
      headers: {
        'x-token': this.token
      }
    }).pipe(
      map( (resp: any) => {
        const { email, name, role, id } = resp.user;
        console.log({resp})
        
        this.usuario = new UserModel( name, email, '', role, id );
        localStorage.setItem('token', resp.token );
        return true;
      }),
      catchError( error => of(false) )
    );

  }


}
