import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileComponent } from 'src/app/common/edit-profile/edit-profile.component';
import { AdminComponent } from '../admin.component';
import { RegisterUsersComponent } from '../register-users/register-users.component';

@Component({
  selector: 'app-management-users',
  templateUrl: './management-users.component.html',
  styleUrls: ['./management-users.component.css']
})
export class ManagementUsersComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(public dialog: MatDialog){}
  edit(id : string){
    this.dialog.open(EditProfileComponent)
  }
  addUser(){
    this.dialog.open(RegisterUsersComponent)
  }
}
