import { CommonService } from 'src/app/util/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from './../../service/users.service';
import { Users } from './../../model/users';
import { LecturersService } from './../../service/lecturers.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user : Users ={}
  constructor(private userService : UsersService, private activeR : ActivatedRoute, 
    public common : CommonService){}
  ngOnInit(): void {
    const id = this.activeR.snapshot.url[1].path
    console.log(id);
    
    this.userService.findById(id).subscribe(rp =>{
      if (rp.data !== undefined && rp.data !== null){
        this.user = rp.data
        console.log(this.user);
      }
    })
  }
}
