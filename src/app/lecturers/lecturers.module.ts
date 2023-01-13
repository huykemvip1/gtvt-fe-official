import { AdminModule } from './../admin/admin.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';


import { LecturersComponent } from './lecturers.component';

import { ManagementStudentsComponent } from './management-students/management-students.component';
import { ProfileLecturersComponent } from './profile-lecturers/profile-lecturers.component';
import { LecturersManagementNewsComponent } from './lecturers-management-news/lecturers-management-news.component';
import { LecturersManagementDocumentsComponent } from './lecturers-management-documents/lecturers-management-documents.component';
import { LecturersManagementNotificationsComponent } from './lecturers-management-notifications/lecturers-management-notifications.component';
import {FormScientificResearchComponnent} from './FormScientificResearch'




@NgModule({
  declarations: [
    LecturersComponent,
    ManagementStudentsComponent,
    ProfileLecturersComponent,
    LecturersManagementNewsComponent,
    LecturersManagementDocumentsComponent,
    LecturersManagementNotificationsComponent,
    FormScientificResearchComponnent
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
    MatCardModule,
    AdminModule
  ],
  exports:[
    CommonModule,
    MatIconModule,
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule
  ]
})
export class LecturersModule { }
