import { NotificationsComponent } from './../common/notifications/notifications.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from '@angular/material/card';

import { AdminComponent } from './admin.component';
import { ManagementUsersComponent } from './management-users/management-users.component';
import { RegisterUsersComponent } from './register-users/register-users.component';
import { ManagementNewsComponent } from './management-news/management-news.component';
import { ManagementNotificationsComponent } from './management-notifications/management-notifications.component';
import { ManagementDocumentsComponent } from './management-documents/management-documents.component';





@NgModule({
  declarations: [
    AdminComponent,
    ManagementUsersComponent,
    RegisterUsersComponent,
    ManagementNewsComponent,
    ManagementNotificationsComponent,
    ManagementDocumentsComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule
  ],
  exports: [
    NotificationsComponent
  ]
})
export class AdminModule { }
