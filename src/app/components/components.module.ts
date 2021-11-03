import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDataComponent } from './table-data/table-data.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


//material imports
import {MatTableModule} from '@angular/material/table';
import { UserBannerComponent } from './user-banner/user-banner.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    TableDataComponent,
    UserDetailComponent,
    UserBannerComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    MatTabsModule
  ],
  exports:[
    TableDataComponent,
    UserDetailComponent
  ]
})
export class ComponentsModule { }
