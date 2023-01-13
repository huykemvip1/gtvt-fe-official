import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-upload-documents',
    template:"<img class='w-100 p-4' src='../../assets/img/gtvt/{{urlImage}}'>",
    styles: []
  })
  export class ShowImageComponent implements OnInit  {
    urlImage : string = ""
    ngOnInit(): void {
        this.urlImage = this.route.url.split("/")[2]
        this.urlImage = this.urlImage+ '.png'
    }
    constructor(private route : Router){
        
    }
  }