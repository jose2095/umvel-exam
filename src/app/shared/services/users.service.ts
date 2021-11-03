import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, UsersResponse } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = environment.userApi;

  constructor(private http:HttpClient) { }

  getUsers(page:number):Observable<UsersResponse>{
    return this.http.get<UsersResponse>(`${this.url}users/?page=${page}`);
  }

  getUserDetail(id:number):Observable<{data:User}>{
    return this.http.get<{data:User}>(this.url+`users/${id}`);
  }

  editUser(user:any):Observable<User>{
    return this.http.patch<User>(`${this.url}users/${user.id}`,{user})
  }
}
