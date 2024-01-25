import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, map, catchError, of } from "rxjs";
import { UserService } from "../services/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private usuarioService: UserService,
              private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.usuarioService.validateToken().pipe(
        map((user) => {
          const isAuthenticated = !!user; // Convertir a booleano
          if (isAuthenticated) {
            return true; // Usuario está autenticado
          } else {
            this.router.navigateByUrl('/auth/login');
            return false; // Usuario no está autenticado
          }
        }),
        catchError((error) => {
          this.router.navigateByUrl('/auth/login');
          return of(false); // En caso de error, el usuario no está autenticado
        })
      );
  }
}
