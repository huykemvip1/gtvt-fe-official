import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadDocumentsComponent } from 'src/app/common/upload-documents/upload-documents.component';

@Component({
  selector: 'app-management-documents',
  templateUrl: './management-documents.component.html',
  styleUrls: ['./management-documents.component.css']
})
export class ManagementDocumentsComponent implements OnInit{
  ngOnInit(): void {
    
  }
  constructor(private dialog : MatDialog){}
  addDocuments(){
    this.dialog.open(UploadDocumentsComponent)
  }
}
