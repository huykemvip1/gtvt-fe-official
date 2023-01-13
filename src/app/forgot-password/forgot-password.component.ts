import { AuthService } from './../service/auth.service';
import { Account } from './../model/account';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuestionSecurityType } from './../enumeration/question-security-type';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  questionSecurity = QuestionSecurityType
  isActive = false;
  isSuccessfulAccountRecovery = false

  accountForm = new FormGroup({
    username : new FormControl(null,{validators: [Validators.required]}),
    email : new FormControl(null,{validators: [Validators.required,Validators.email]}),
    question_security : new FormControl(null),
    answer_security : new FormControl(null,{validators: [Validators.required]})
  }) 
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isActive = false;
  }
  constructor(private router : Router,private auth : AuthService){}
  goToSingin(){
    this.router.navigate(['/signin'],{replaceUrl:true})
  }
  goToSingup(){
    this.router.navigate(['/signup'],{replaceUrl:true})
  }

  activeTakeAccount(){
    var account : Account = {}
    
    if (this.accountForm.valid){
      account.username = this.accountForm.controls.username.value
      account.email_security = this.accountForm.controls.email.value
      account.question_security = this.accountForm.controls.question_security.value
      account.answer_security = this.accountForm.controls.answer_security.value
       this.auth.forgotAccount(account).subscribe(rp =>{
        if (rp.data === true){
          this.isSuccessfulAccountRecovery = true;
        }
       })
    }
    this.isActive = true
  }
}
