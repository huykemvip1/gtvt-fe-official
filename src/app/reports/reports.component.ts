import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  fileName = ""
  ngOnInit(): void {
    
  }
  constructor(){}

  onFileSelected(event : any){
    const file : File =event.target.files[0];
    this.fileName = file.name;
  }
}
