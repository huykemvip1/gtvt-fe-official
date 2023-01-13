import { FormScientificResearchComponnent } from './../FormScientificResearch';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-lecturers',
  templateUrl: './profile-lecturers.component.html',
  styleUrls: ['./profile-lecturers.component.css']
})
export class ProfileLecturersComponent {
  constructor(private dialog : MatDialog){}
  addScientificResearch(){
    this.dialog.open(FormScientificResearchComponnent)
  }
}
