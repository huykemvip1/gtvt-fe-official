import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavbarComponent } from './common/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  
  
  @ViewChild('navbar') navbar:NavbarComponent | undefined;
  title = 'gtvt-fe-v1';
  
  @HostListener('click', ['$event.target'])

  onChange(html : HTMLInputElement) { 
    if (!html.className.includes('toggleNav')){
      
      this.navbar?.toggleNavIntroDuction?.nativeElement.classList.remove('show')
      this.navbar?.toggleNavPage?.nativeElement.classList.remove('show')
      this.navbar?.toggleNavProfile?.nativeElement.classList.remove('show')
      this.navbar?.setStatusToggle()
    }
  }
}
