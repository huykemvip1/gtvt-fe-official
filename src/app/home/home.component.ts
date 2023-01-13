import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  status = 1;
  goToSingin(){
    window.open("signin")
  }
  goToSingup(){
    window.open("signup")
  }
  
  ngOnInit(): void {
    if (this.status === 1){
      
    }
  }
  
}
