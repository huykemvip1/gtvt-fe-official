import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AuthGuardService } from 'src/app/service/auth-guard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  statusTogglePage = true;
  statusToggleIntroduction = true;
  statusToggleProfile = true;
  @ViewChild('toggleNavPage') toggleNavPage:ElementRef | undefined;
  @ViewChild('toggleNavIntroDuction') toggleNavIntroDuction:ElementRef | undefined;
  @ViewChild('toggleNavProfile') toggleNavProfile:ElementRef | undefined;

   statusLogined = false;
  constructor(private route : Router, 
    private auth : AuthGuardService, 
    private elementRef : ElementRef){}
  ngOnInit(): void {
    console.log(localStorage.getItem('token'));
    if (localStorage.getItem("token") != null || localStorage.getItem("token") != undefined){
      
      this.statusLogined = true;
    }else{
      this.statusLogined = false;
    }
  }
  
  ngAfterViewInit(): void {
   
  }
  
  activeLogged(){
    this.statusLogined = false
    localStorage.removeItem('token')
    this.route.navigate(['/home'],{replaceUrl: true})
  }
  
  showPage(){
    if (this.statusTogglePage === true) {
      this.toggleNavPage?.nativeElement.classList.add('show')
      this.statusTogglePage = false
    }else{
      this.toggleNavPage?.nativeElement.classList.remove('show')
      this.statusTogglePage = true
    }
  }
  showIntroduction(){
    if (this.statusToggleIntroduction === true) {
      this.toggleNavIntroDuction?.nativeElement.classList.add('show')
      this.statusToggleIntroduction = false
    }else{
      this.toggleNavIntroDuction?.nativeElement.classList.remove('show')
      this.statusToggleIntroduction = true
    }
  }
  showProfile(){
    if (this.statusToggleProfile === true) {
      this.toggleNavProfile?.nativeElement.classList.add('show')
      this.statusToggleProfile = false
    }else{
      this.toggleNavProfile?.nativeElement.classList.remove('show')
      this.statusToggleProfile = true
    }
  }
  setStatusToggle(){
    this.statusTogglePage = true;
    this.statusToggleIntroduction = true;
    this.statusToggleProfile = true
  }
  // Đến đường dẫn quản lý thông báo
  goToNotifications(){
    this.route.navigate(['/admin/management-notifications'])
  }
  
  

}
