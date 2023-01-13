import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadDocumentsComponent } from 'src/app/common/upload-documents/upload-documents.component';

@Component({
  selector: 'app-lecturers-management-documents',
  templateUrl: './lecturers-management-documents.component.html',
  styleUrls: ['./lecturers-management-documents.component.css']
})
export class LecturersManagementDocumentsComponent {
  constructor(private dialog : MatDialog){}
  addDocuments(){
    this.dialog.open(UploadDocumentsComponent)
  }
}
