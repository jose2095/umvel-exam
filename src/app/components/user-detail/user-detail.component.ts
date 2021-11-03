import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/users.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  @Input()
  get user():User {return this.currentUser}
  set user(user:User){this.currentUser = user}

  currentUser!:User; 


  constructor() { }

  ngOnInit(): void {
  }
}
