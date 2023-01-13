import { UsersModule } from './users/users.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';
import { FooterComponent } from './common/footer/footer.component';
import { LecturersComponent } from './introduce/lecturers/lecturers.component';
import { ProfileComponent } from './common/profile/profile.component';
import { CoursesComponent } from './introduce/courses/courses.component';
import { CollectionsComponent } from './introduce/collections/collections.component';
import { CourseComponent } from './common/course/course.component';
import { NewsComponent } from './pages/news/news.component';
import { ForumComponent } from './pages/forum/forum.component';
import { DocumentsComponent } from './documents/documents.component';
import { NewsDetailsComponent } from './common/news-details/news-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { EditProfileComponent } from './common/edit-profile/edit-profile.component';
import { CreateNewsComponent } from './common/create-news/create-news.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UploadDocumentsComponent } from './common/upload-documents/upload-documents.component';
import { ReportsComponent } from './reports/reports.component';
import { LecturersModule } from './lecturers/lecturers.module';
import { NotificationDetailsComponent } from './common/notification-details/notification-details.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';

export function tokenGetter(){
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SinginComponent,
    SingupComponent,
    FooterComponent,
    LecturersComponent,
    ProfileComponent,
    CoursesComponent,
    CollectionsComponent,
    CourseComponent,
    NewsComponent,
    ForumComponent,
    DocumentsComponent,
    NewsDetailsComponent,
    EditProfileComponent,
    CreateNewsComponent,
    UploadDocumentsComponent,
    ReportsComponent,
    NotificationDetailsComponent,
    ForgotPasswordComponent
  ],
  imports: [
    AdminModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    CKEditorModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    LecturersModule,
    UsersModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule .forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
