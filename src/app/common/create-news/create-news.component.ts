import { Component, OnInit } from '@angular/core';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import * as ClassEditor from '../../build/ckeditor'

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {
  public Editor = ClassEditor
  data = ""
  ngOnInit(): void {
    
  }
  constructor(){

  }
   public onChange( { editor }: ChangeEvent ) {
    if (editor.state !== 'initializing'){
      this.data = editor.getData();
    }
    
}

receivedData(){
  console.log(this.data);
}
}
