import { UsersService } from './../service/users.service';
import { Account } from './../model/account';
import { Users } from './../model/users';
import { AuthService } from './../service/auth.service';
import { QuestionSecurityType } from './../enumeration/question-security-type';
import { GenderType } from './../enumeration/gender-type';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {
  // khởi tạo
  genderValue = GenderType;
  questionValue = QuestionSecurityType;
  checkRePassword = false;
  isSignupSuccess = false;
  isExistUsername = false;
  isExistEmail = false;

  statusCheck = false;
  signupForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(8)]),
    password: new FormControl('', [Validators.minLength(6)]),
    re_password: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    gender: new FormControl(null),
    email: new FormControl('', [Validators.email]),
    phone_number: new FormControl('', [Validators.pattern("\\d{10}")]),
    question_security: new FormControl(null),
    answer_security: new FormControl('')
  })

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.checkRePassword = false;
    this.isSignupSuccess = false;
  }

  goToSingin() {
    this.router.navigate(['/signin'], { replaceUrl: true })
  }

  checkUsername() {

    let username = this.signupForm.controls.username.value;
    if (username !== null) {
      this.auth.checkUsername(username).subscribe(rp =>{
         if (rp.data !== null){
          this.isExistUsername = true;
         }else{
          this.isExistUsername = false;
         }
      })
    }else{
      this.isExistUsername = true;
    }
  }
  checkEmail(){
    let email = this.signupForm.controls.email.value;
    if (email !== null) {
      this.auth.checkEmail(email).subscribe(rp =>{
        if (rp.data !== null){
          this.isExistEmail = true;
         }else{
          this.isExistEmail = false;
         }
      })
    }else{
      this.isExistEmail = true;
    }
  }

  signup() {
    const form = this.signupForm.controls
    var password = form.password.value;
    var re_password = form.re_password.value;
    if (re_password !== password) {
      this.checkRePassword = true;
    }
    if (re_password === password && this.signupForm.valid) {
      var user: Users = {};
      var account: Account = {}

      user.first_name = form.first_name.value
      user.last_name = form.last_name.value
      user.phone_number = form.phone_number.value
      user.gender = form.gender.value

      account.username = form.username.value
      account.password = form.password.value
      account.question_security = form.question_security.value
      account.answer_security = form.answer_security.value
      account.email_security = form.email.value

       this.auth.signup(user, account).subscribe((rp) =>{
           if (rp.code === '404' || rp.code === '500'){
            this.isSignupSuccess = false
           }else{
            this.isSignupSuccess = true
           }
       })
    } else {
      this.isSignupSuccess = false;
    }
    this.statusCheck = true;
  }
  // handle confirm password 

}
