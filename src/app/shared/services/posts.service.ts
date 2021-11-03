import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private endpoint = environment.posturl;

  constructor(private http:HttpClient) { }

  getPosts(userId:number):Observable<Array<Post>>{
    return this.http.get<Array<Post>>(this.endpoint,{params:{userId}});
  }

  deletePost(userId:number):Observable<any>{
    return this.http.delete(this.endpoint+'/'+userId);
  }

  getAllPosts():Observable<Array<Post>>{
    return this.http.get<Array<Post>>(this.endpoint);
  }
}