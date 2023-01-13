import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateNewsComponent } from 'src/app/common/create-news/create-news.component';

@Component({
  selector: 'app-lecturers-management-news',
  templateUrl: './lecturers-management-news.component.html',
  styleUrls: ['./lecturers-management-news.component.css']
})
export class LecturersManagementNewsComponent {
  constructor(private dialog : MatDialog,private router: Router){}
  addNews(){
    this.dialog.open(CreateNewsComponent)
  }
  showNewsDetail(id : string){
    this.router.navigate(['/pages/news',id],{replaceUrl: true})
  }
}
