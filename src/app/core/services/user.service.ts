import { Injectable,  } from "@angular/core";
import { environment } from "src/environments/environments";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { UserModel } from "../models/user.model";
import { User } from "src/app/modules/data-table/data-table.component";
import { Observable, catchError, map, of, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})

export class UserService {
  private readonly base_url = environment.baseUrl;


  public usuario:UserModel | undefined;
  constructor(
    private router: Router,
    private http: HttpClient
   
    ) {} 

  
    getUserProfile(data:any) {
      return this.http.get(`${this.base_url}/user/profile/${data}`);
    }
  
    getAllUsers(page: any): Observable<User[]> {
      // Ajusta la ruta si es necesario para incluir parámetros de paginación
      return this.http.get<User[]>(`${this.base_url}/user/all/${page}`);
    }
  
    searchUser(query: string) {
      return this.http.get(`${this.base_url}/user/profile/search/${query}`);
    }
    UpdateUser(userId: any, userData: any) {
      return this.http.put(`${this.base_url}/user/update/${userId}`, userData);
    }


    validateToken(): Observable<boolean> {
      const token = localStorage.getItem('token') || '';
  
      return this.http.get(`${ this.base_url }/login/renew`, {
        headers: {
          'x-token': token
        }
      }).pipe(
        tap( (resp: any) => {
          localStorage.setItem('token', resp.token );
        }),
        map( resp => true),
        catchError( error => of(false) )
      );
  
    }
    






  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth/login');
  }

  
 


}
