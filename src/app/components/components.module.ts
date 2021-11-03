import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDataComponent } from './table-data/table-data.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


//material imports
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    TableDataComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports:[
    TableDataComponent,
    UserDetailComponent
  ]
})
export class ComponentsModule { }
