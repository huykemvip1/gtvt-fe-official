import { JobTitleType } from './../../enumeration/job-title-type';
import { JobPositionType } from './../../enumeration/job-position-type';
import { LecturersService } from './../../service/lecturers.service';
import { Users } from './../../model/users';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/util/common.service';

@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['./lecturers.component.css']
})
export class LecturersComponent implements OnInit {

  positionType = JobPositionType
  titleType = JobTitleType
  users : Users[] = [] 

  constructor(private router : Router, private lecturerService : LecturersService,
    public common : CommonService){
    
  }
  ngOnInit(): void {
    this.lecturerService.findAll().subscribe(rp =>{
      if (rp.data !== null && rp.data !== undefined){
        this.users = rp.data
      }
    })
    
  }
  userDetails(id : any){
    this.router.navigate(['/profile-details',id],{replaceUrl: true})
  }

}
