import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUserInput, User } from 'src/generated-types';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'api/auth/login'

  constructor(private readonly httpClient: HttpClient) { }

  login(loginRequest: CreateUserInput) {
    return this.httpClient.post<User>(this.apiUrl, loginRequest);
  }
}
