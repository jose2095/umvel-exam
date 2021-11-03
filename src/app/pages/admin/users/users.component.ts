import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { forkJoin } from 'rxjs';
import { Post } from 'src/app/shared/models/post.model';
import { User } from 'src/app/shared/models/users.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PostsService } from 'src/app/shared/services/posts.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild('sideNav',{static:false}) sidenav!:MatSidenav;

  currentUser!:User;
  currentPosts!:Array<Post>;

  constructor(
    private userService:UsersService,
    public authService:AuthService,
    private postService:PostsService) { }

  ngOnInit(): void {
  }

  async handdleUser(id:number){
   forkJoin(this.userService.getUserDetail(id),this.postService.getPosts(id))
   .subscribe(data=>{
     this.currentUser=data[0].data;
     this.currentPosts=data[1];
     this.sidenav.open(); 
   });
  }

}
