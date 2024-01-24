import { Injectable,  } from "@angular/core";
import { environment } from "src/environments/environments";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { UserModel } from "../models/user.model";

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
  
    getAllUsers(page: number) {
      return this.http.get(`${this.base_url}/user/all/${page}`);
    }
  
    searchUser(query: string) {
      return this.http.get(`${this.base_url}/user/profile/search/${query}`);
    }







  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth/login');
  }

  
 


}
