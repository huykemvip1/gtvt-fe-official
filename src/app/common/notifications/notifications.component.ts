import { NotificationDetailsComponent } from './../notification-details/notification-details.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor(private dialog : MatDialog){}
  
  showNotificationDetails(){
    this.dialog.open(NotificationDetailsComponent)
  }

}
