import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';
import { User } from 'src/app/shared/models/users.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  @Input()
  get user():User {return this.currentUser}
  set user(user:User){this.currentUser = user};

  @Input() 
  get posts():Array<Post>{return this.currentPosts}
  set posts(posts:Array<Post>){this.currentPosts=posts};

  currentUser!:User;
  currentPosts!:Array<Post>
  constructor() { }

  ngOnInit(): void {
  }
}
