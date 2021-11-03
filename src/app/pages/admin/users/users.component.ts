import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { User } from 'src/app/shared/models/users.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild('sideNav',{static:false}) sidenav!:MatSidenav;

  currentUser!:User;

  constructor(private userService:UsersService) { }

  ngOnInit(): void {
  }

  async handdleUser(id:number){
   this.userService.getUserDetail(id)
   .subscribe((response) =>{
     this.currentUser = response.data;
     this.sidenav.open(); 
   })

   
  
  }

}
