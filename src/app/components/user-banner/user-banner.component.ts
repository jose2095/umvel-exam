import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/users.model';

@Component({
  selector: 'app-user-banner',
  templateUrl: './user-banner.component.html',
  styleUrls: ['./user-banner.component.scss']
})
export class UserBannerComponent implements OnInit {

  constructor() { }
  @Input() user!:User;

  ngOnInit(): void {
  }

}
