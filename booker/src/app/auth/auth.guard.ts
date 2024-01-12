import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private readonly authService: AuthService, private readonly router: Router) { }

  canActivate() {
    return this.authService.isAutehticated().pipe(
      tap((authenticated) => {
        
        if(!authenticated){
          this.router.navigate(['/login']);
        }
      })
    )
  }

}