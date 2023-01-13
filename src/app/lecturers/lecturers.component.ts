import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['./lecturers.component.css']
})
export class LecturersComponent implements OnInit {
  keyActive:string = '';
  id : string = '';
  constructor(private router : Router){

  }
  ngOnInit(): void {
    this.keyActive = this.router.url.split("/")[2];
    this.id = this.router.url.split("/")[3];
  }
  setActive(key:string){
   this.keyActive = key
  }
}
