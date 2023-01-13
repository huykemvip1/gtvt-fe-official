import { AdminModule } from './../admin/admin.module';
import { NotificationsComponent } from './../common/notifications/notifications.component';
import { UsersManagementNotificationsComponent } from './users-management-notifications/users-management-notifications.component';
import { LecturersModule } from './../lecturers/lecturers.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { ProfileUsersComponent } from './profile-users/profile-users.component';
import { MatCardModule } from '@angular/material/card';
import { UsersManagementDocumentsComponent } from './users-management-documents/users-management-documents.component';




@NgModule({
  declarations: [
    UsersComponent,
    ProfileUsersComponent,
    UsersManagementDocumentsComponent,
    UsersManagementNotificationsComponent
  ],
  imports: [
    CommonModule,
    LecturersModule,
    AdminModule
  ]
})
export class UsersModule { }
