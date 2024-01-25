import { Injectable,  } from "@angular/core";
import { environment } from "src/environments/environments";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { UserModel } from "../models/user.model";
import { User } from "src/app/modules/data-table/data-table.component";
import { BehaviorSubject, Observable, catchError, map, of, tap } from "rxjs";
import { UserProfile } from "../interfaces/user.profile";

@Injectable({
  providedIn: "root",
})

export class UserService {
  private readonly base_url = environment.baseUrl;
  private userProfileSubject: BehaviorSubject<UserProfile | null>;
  public userProfile: Observable<UserProfile | null>;


  public usuario!:UserModel;
  constructor(
    private router: Router,
    private http: HttpClient
    
   
    ) {
    this.userProfileSubject = new BehaviorSubject<UserProfile | null>(null);
    this.userProfile = this.userProfileSubject.asObservable();
    } 

  
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


    // validateToken(): Observable<boolean> {
    //   const token = localStorage.getItem('token') || '';
  
    //   return this.http.get(`${ this.base_url }/user/profile`, {
    //     headers: {
    //       'Authorization': `Bearer ${token}`
    //     }
    //   }).pipe(
    //     tap( (resp: any) => {
    //       console.log(resp,'resp desde userservices')
    //       if (typeof resp.token === 'string') {
    //         localStorage.setItem('token', resp.token);
    //       }
    //     }),
    //     map( resp => true),
    //     catchError( error => of(false) )
    //   );
  
    // }
    
    // validateToken(): Observable<UserModel | null> {
    //   const token = localStorage.getItem('token') || '';
      
    //   return this.http.get<UserModel>(`${this.base_url}/user/profile`, {
    //     headers: {
    //       'Authorization': `Bearer ${token}`
    //     }
    //   }).pipe(
    //     tap((resp: UserModel) => {
    //       console.log(resp, 'resp desde userservices');
    //       // Si esperas obtener un nuevo token en la respuesta, actualiza el local storage
    //       if (resp && typeof resp['token'] === 'string') {
    //         localStorage.setItem('token', resp['token']);
    //       }
    //     }),
    //     catchError(error => of(null))
    //   );
    // }

    public get userProfileValue(): UserProfile | null {
      return this.userProfileSubject.value;
    }
  
    validateToken(): Observable<UserProfile> {
      const token = localStorage.getItem('token') || '';
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
      return this.http.get<UserProfile>(`${environment.baseUrl}/user/profile`, { headers });
    }
  
    loadUserProfile() {
      this.validateToken().subscribe({
        next: (profile) => {
          this.userProfileSubject.next(profile);
        },
        error: (err) => {
          console.error(err);
          this.userProfileSubject.next(null);
        },
      });
    }
  





  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth/login');
  }

  
 


}
