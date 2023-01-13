import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @ViewChild('sideBarStatics') sideBarStatics:ElementRef | undefined;
  @ViewChild('sideBarUsers') sideBarUsers:ElementRef | undefined;
  @ViewChild('sideBarNews') sideBarNews:ElementRef | undefined;
  @ViewChild('sideBarDocuments') sideBarDocuments:ElementRef | undefined;
  keyActive:string = '';
  constructor(private router : Router){

  }
  ngOnInit(): void {
    this.keyActive = this.router.url.split("/")[2];
  }
  setActive(key:string){
   this.keyActive = key
  }
  


}
