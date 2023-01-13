import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadDocumentsComponent } from 'src/app/common/upload-documents/upload-documents.component';

@Component({
  selector: 'app-users-management-documents',
  templateUrl: './users-management-documents.component.html',
  styleUrls: ['./users-management-documents.component.css']
})
export class UsersManagementDocumentsComponent {
  constructor(private dialog : MatDialog){}
  addDocuments(){
    this.dialog.open(UploadDocumentsComponent)
  }
}
