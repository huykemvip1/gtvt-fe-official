import { RoleTypes } from './enumeration/role-types';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LecturersManagementNotificationsComponent } from './lecturers/lecturers-management-notifications/lecturers-management-notifications.component';
import { UsersManagementDocumentsComponent } from './users/users-management-documents/users-management-documents.component';
import { ManagementNotificationsComponent } from './admin/management-notifications/management-notifications.component';
import { ProfileUsersComponent } from './users/profile-users/profile-users.component';
import { ShowImageComponent } from './common/show-image';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementDocumentsComponent } from './admin/management-documents/management-documents.component';
import { ManagementNewsComponent } from './admin/management-news/management-news.component';
import { ManagementUsersComponent } from './admin/management-users/management-users.component';
import { CourseComponent } from './common/course/course.component';
import { NewsDetailsComponent } from './common/news-details/news-details.component';
import { ProfileComponent } from './common/profile/profile.component';
import { DocumentsComponent } from './documents/documents.component';
import { HomeComponent } from './home/home.component';
import { CollectionsComponent } from './introduce/collections/collections.component';
import { CoursesComponent } from './introduce/courses/courses.component';
import { LecturersComponent } from './introduce/lecturers/lecturers.component';
import { LecturersManagementDocumentsComponent } from './lecturers/lecturers-management-documents/lecturers-management-documents.component';
import { LecturersManagementNewsComponent } from './lecturers/lecturers-management-news/lecturers-management-news.component';
import { ManagementStudentsComponent } from './lecturers/management-students/management-students.component';
import { ProfileLecturersComponent } from './lecturers/profile-lecturers/profile-lecturers.component';
import { ForumComponent } from './pages/forum/forum.component';
import { NewsComponent } from './pages/news/news.component';
import { ReportsComponent } from './reports/reports.component';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';
import { UsersManagementNotificationsComponent } from './users/users-management-notifications/users-management-notifications.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  // {path:'',redirectTo: 'home'},
  {path:'home',component: HomeComponent},
  {path: 'signup',component: SingupComponent},
  {path: 'signin',component: SinginComponent},
  {path: 'documents', component: DocumentsComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'forgot-password',component: ForgotPasswordComponent},
  // phần giới thiệu
  {path: 'introduce/lecturers',component: LecturersComponent},
  {path: 'introduce/courses',component: CoursesComponent},
  {path: 'introduce/collections',component: CollectionsComponent},
  // phần pages
  {path: 'pages/news',component:NewsComponent},
  {path: 'pages/news/:id',component:NewsDetailsComponent},
  {path: 'pages/forum',component: ForumComponent},
  //  Phần admin
  {path: 'admin/management-users', component: ManagementUsersComponent},
  {path: 'admin/management-news', component:ManagementNewsComponent},
  {path: 'admin/management-documents', component: ManagementDocumentsComponent},
  {path: 'admin/management-notifications',component:ManagementNotificationsComponent},
  // Phần giảng viên
  {path: 'lecturer/profile/:id',component: ProfileLecturersComponent},
  {path: 'lecturer/management-news/:id',component: LecturersManagementNewsComponent},
  {path: 'lecturer/management-documents/:id',component: LecturersManagementDocumentsComponent},
  {path: 'lecturer/management-students/:id',component: ManagementStudentsComponent},
  {path: 'lecturer/management-notifications/:id',component: LecturersManagementNotificationsComponent},
  // Phần gọi liên quan id
  {path: 'show-image/:id',component:ShowImageComponent},
  {path: 'profile-details/:id',component: ProfileComponent},
  {path: 'course/:id',component:CourseComponent},
  // Phần người dùng
  {path: 'user/profile/:id',component: ProfileUsersComponent},
  {path: 'user/management-documents/:id',component: UsersManagementDocumentsComponent},
  {path: 'user/management-notifications/:id',component: UsersManagementNotificationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
