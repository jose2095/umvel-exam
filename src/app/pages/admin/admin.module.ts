import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
//material imports
import {MatSidenavModule} from '@angular/material/sidenav';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    ComponentsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AdminModule { }
