import { PublicService } from './../../service/public.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  
  courses: Course[] = [];

  constructor(private router : Router, private publicService : PublicService){}
  
  ngOnInit(): void {

    this.publicService.findCourses().subscribe(rp =>{
      if (rp.data !== null && rp.data !== undefined){
        this.courses = rp.data
        console.log(this.courses[0].user);
        
      }
    })

  }
  courseDetails(id : number | null | undefined){
    this.router.navigate(['/course',id],{replaceUrl: true})
  }
}
