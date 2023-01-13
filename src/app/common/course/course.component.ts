import { CommonService } from 'src/app/util/common.service';
import { Course } from 'src/app/model/course';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './../../service/users.service';
import { Component } from '@angular/core';
import { PublicService } from 'src/app/service/public.service';
import { Users } from 'src/app/model/users';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  students : Users[]  | null | undefined
  academicAdvisor : Users | null | undefined
  course : Course = {}
  pageCurrent : number = 1
  numberPages : number = 1
  positionSelected : number = 1

  constructor(private publicService : PublicService, 
    private userService : UsersService,
    private route : Router,
    private router : ActivatedRoute ,
    public common : CommonService){
      this.router.queryParams.subscribe((param) =>{
        if (param['page'] !== undefined  ){
          this.positionSelected = param['page']
        }else{
          this.positionSelected = 1
        }
     }) 
      
    }
    

  ngOnInit(): void {
    const id = this.router.snapshot.url[1].path
    if (!isNaN(Number.parseInt(id))){
     
      this.userService.findUsersByByCourse(Number.parseInt(id),this.positionSelected).subscribe(rp =>{
        const data = rp.data
        console.log(rp.data);
        
        if (data !== undefined && data !== null){
          this.course = {
            id : data.data?.id,
            name : data.data?.name
          }
          if (data.data !==  undefined && data.data !== null){
            this.students = data.data.users
          }
          if (data.data !== undefined && data.data !== null){
            this.academicAdvisor = data.data?.user
          }
          this.numberPages = data.total_page
        }
      })
    }
  }
  userDetails(id : string | null | undefined){
    this.route.navigate(['profile-details/',id],{replaceUrl: true})
  }
  previousPage(){
    this.pageCurrent = this.pageCurrent - 3
  }
  nextPage(){
    this.pageCurrent = this.pageCurrent + 3
  }
}
