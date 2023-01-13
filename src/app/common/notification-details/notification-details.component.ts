import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.css']
})
export class NotificationDetailsComponent implements OnInit {
  constructor( private dialogRef: MatDialogRef<NotificationDetailsComponent>){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  closeNotification(){
    console.log("haha");
    
    this.dialogRef.close();
  }
}
