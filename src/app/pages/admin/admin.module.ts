import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
//material imports
import {MatSidenavModule} from '@angular/material/sidenav';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    ComponentsModule
  ]
})
export class AdminModule { }
