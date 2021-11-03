import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { LoginResponse, userAccount } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endpoint:string = environment.userApi+'login';
  public token:BehaviorSubject<string|null>;
  
  constructor(private http:HttpClient,private router:Router) {
    this.token= new BehaviorSubject(
      localStorage.getItem('token')
    )
  }


  /**
   * @return user token
   */
  public get userToken(): string | null {
    return this.token.value;
  }


  /**
   * auth function
   * @param email string
   * @param password string
   */
  login(user:userAccount):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(this.endpoint,user)
    .pipe(map(res=>{
      if (res.token) {
        localStorage.setItem('token', res.token);
        this.token.next(res.token);
      }
      return res;
    }))
  }

  /**
   * logout function
   */
  logOut(){
    localStorage.removeItem('token');
    this.token.next(null);
    this.router.navigate(['/login'])
  }
}
