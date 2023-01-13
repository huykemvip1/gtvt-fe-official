import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
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
