import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Route, Router, Routes } from "@angular/router";
import { Subject, catchError, of, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiUrl = 'api/auth';
  private readonly authenticated = new Subject<boolean>();
  authenticated$ = this.authenticated.asObservable();
  
  constructor(private readonly httpClient: HttpClient, private router: Router) { }

  isAutehticated() {
    return this.httpClient.get<boolean>(this.apiUrl).pipe(
      tap(() => {
        this.authenticated.next(true);
      }),
      catchError(() => of(false))
    )
  }

  logout() {
    this.httpClient.post(`${this.apiUrl}/logout`, {}).subscribe(() => {
      this.authenticated.next(false);
      this.router.navigate(['/login']);
    })
  }
  
}