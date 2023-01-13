import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-upload-documents',
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.css']
})
export class UploadDocumentsComponent implements OnInit  {
  fileName = ''
  constructor( public dialogRef: MatDialogRef<UploadDocumentsComponent>) { }

  ngOnInit(): void {
  }
  onFileSelected(event : any){
    const file : File = event.target.files[0];
    this.fileName = file.name
  }
  closeDialog(){
    this.dialogRef.close()
    
  }
}
