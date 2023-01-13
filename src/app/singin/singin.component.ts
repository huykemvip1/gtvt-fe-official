import { Router } from '@angular/router';
import { RoleTypes } from './../enumeration/role-types';
import { JwtDecodedObject } from './../model/jwt-decoded-object';
import { AuthService } from './../service/auth.service';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent {
  statusCheck = false;
  isLoginSuccess = false;
  username = new FormControl('',[
    Validators.required
  ]);
  password = new FormControl('',[
    Validators.required
  ]);

  constructor(private auth : AuthService, private router : Router){}
  verifyAccount(){
    
    if (this.username.errors === null 
       && this.password.errors === null){
        this.auth.authentication(this.username.value , this.password.value).subscribe(rp =>{
          console.log(rp.data);
          
          if (rp.data !== null){
            let token = rp.data.token;
            localStorage.setItem('token', token);
            
            this.router.navigate(['/admin/management-users'],{replaceUrl:true})
          }else{
            setTimeout(() =>{
              this.isLoginSuccess = false
            },1000)
          }
        })
      }
     
  }
}
