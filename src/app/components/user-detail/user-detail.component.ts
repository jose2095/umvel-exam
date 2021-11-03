import { Component, Input, OnInit } from '@angular/core';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from 'src/app/shared/constants';
import { Post } from 'src/app/shared/models/post.model';
import { User } from 'src/app/shared/models/users.model';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  @Input()
  get user():User {return this.currentUser}
  set user(user:User){this.currentUser = user};

  @Input() 
  get posts():Array<Post>{return this.currentPosts}
  set posts(posts:Array<Post>){this.currentPosts=posts};

  currentUser!:User;
  currentPosts!:Array<Post>

  constructor(private postService:PostsService) { }

  handdleDelete(post:Post,index:number){
    this.postService.deletePost(post.id)
    .subscribe(()=>{
      this.currentPosts.splice(index,1);
      alert(SUCCESS_MESSAGE);
    }
    ,error=>{
      alert(ERROR_MESSAGE)
    })
    
  }
}
