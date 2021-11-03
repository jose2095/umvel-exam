import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User, UsersResponse } from 'src/app/shared/models/users.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {
  @Output() showDetails:EventEmitter<number> = new EventEmitter<number>();

  response!:UsersResponse;
  data:Array<User>=[];
  headers = ['id','email','first_name','last_name'];

  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.getUsers(1);
  }

  private getUsers(page:number) : void{
    this.userService.getUsers(page)
    .subscribe(response=>{
      this.response=response;
      this.data=response.data;
    },err=>{
      alert('Error')
    })
  }

  openDetails(user:User){
    this.showDetails.emit(user.id);
  }

}
