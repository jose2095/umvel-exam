import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from 'src/app/shared/constants';
import { Post } from 'src/app/shared/models/post.model';
import { User } from 'src/app/shared/models/users.model';
import { PostsService } from 'src/app/shared/services/posts.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { UtilService } from 'src/app/shared/utils/util.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  @Input()
  get user():User {return this.currentUser}
  set user(user:User){
      this.currentUser = user;
      this.setFormInformation();
    };

  @Input() 
  get posts():Array<Post>{return this.currentPosts}
  set posts(posts:Array<Post>){this.currentPosts=posts};

  public currentUser!:User;
  public currentPosts!:Array<Post>;
  public userForm:FormGroup;

  constructor(
    public utilsService:UtilService,
    private userService:UsersService,
    private postService:PostsService,
    private formBuilder:FormBuilder) { 
    this.userForm = this.formBuilder.group({
      lastName:['',Validators.required],
      firstName:['',Validators.required],
      email:['',[Validators.required,Validators.email]]
    })
  }

  /**
   * 
   * @param post post to delete
   * @param index post's index to remove
   */
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

  /**
   * send information to update
   */
  onSubmit() {
    const userUpdate={
      id:this.currentUser.id,
      first_name:this.userForm.value.firstName,
      last_name:this.userForm.value.lastName,
      email:this.userForm.value.email
    }

    this.userService.editUser(userUpdate)
      .subscribe(() => {
        alert(SUCCESS_MESSAGE)
      },
        error => {
          alert(ERROR_MESSAGE)
        })
  }

  /**
   * set information in form fields
   */
  private setFormInformation(){
    this.userForm.patchValue({
      firstName:this.currentUser?.first_name,
      lastName:this.currentUser?.last_name,
      email:this.currentUser?.email
    })
  }
}
