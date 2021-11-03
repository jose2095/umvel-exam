import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDataComponent } from './table-data/table-data.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


//material imports
import {MatTableModule} from '@angular/material/table';
import { UserBannerComponent } from './user-banner/user-banner.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { PostComponent } from './post/post.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    TableDataComponent,
    UserDetailComponent,
    UserBannerComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatIconModule
  ],
  exports:[
    TableDataComponent,
    UserDetailComponent
  ]
})
export class ComponentsModule { }
