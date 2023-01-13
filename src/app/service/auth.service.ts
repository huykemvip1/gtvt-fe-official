import { JwtDecodedObject } from './../model/jwt-decoded-object';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { evironment } from 'src/assets/environment.dev';
import { Account } from '../model/account';
import { Result } from '../model/result';
import { Users } from '../model/users';
import jwtDecode, * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiSignup = evironment.apiUrl + 'authentication/signup';
  apiForgot = evironment.apiUrl + 'authentication/forgot';
  apiFindUsername = evironment.apiUrl + 'users/getByUsername';
  apiFindEmail = evironment.apiUrl + 'users/getByEmail';

  constructor(public jwtHelper: JwtHelperService, private http: HttpClient) { }

  // Check user
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token === null || token === undefined) {
      return false;
    }
    return this.jwtHelper.isTokenExpired(token);
  }

  // Decode token
  decodeToken(token : string) : any{
    return jwtDecode(token)
  }


  // Đăng nhập tài khoản
  authentication(username: string | null, password: string | null): Observable<Result<any>> {
    return this.http.post<Result<JwtDecodedObject>>(evironment.apiUrl + "authentication/signin", {
      username: username,
      password: password
    })
  }

  // Đăng ký tài khoản
   signup(user: Users, account: Account): Observable<Result<boolean>> {
    const body = {
      username: account.username,
      password: account.password,
      question_security: account.question_security,
      answer_security: account.answer_security,
      email_security: account.email_security,
      first_name: user.first_name,
      last_name: user.last_name,
      gender: user.gender,
      phone_number: user.phone_number
    }

    // call api function
     return  this.http.post<Result<boolean>>(this.apiSignup, body, {
      headers: {
        'Content-Type': 'application/json',
      },
      observe: 'body'
    })
    // return value
    
  }

  checkUsername(username: string): Observable<Result<boolean>> {
    return this.http.get<Result<boolean>>(this.apiFindUsername, { params: { username: username }})
  }
  checkEmail(email: string): Observable<Result<boolean>> {
    return this.http.get<Result<boolean>>(this.apiFindEmail, { params: { email: email }})
  }

  forgotAccount(account: Account): Observable<Result<boolean>> {
   return this.http.post<Result<boolean>>(this.apiForgot, { account }, { headers: { 'Content-Type': 'application/json' } })
    
  }
}
