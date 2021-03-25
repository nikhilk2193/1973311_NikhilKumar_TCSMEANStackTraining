import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  userData: any;
  loginFlag: boolean;
  username : any;
  password : any;

  ngOnInit(): void {
  }

  onClickSubmit(data) {
    this.loginFlag = false;
    let userName = data.userName;
    let passWord = data.password;
    if (sessionStorage.myObject != null) {
      this.userData = JSON.parse(sessionStorage.myObject);
      for (var i = 0; i < this.userData.length; i++) {
        if (userName === this.userData[i].userUserName && passWord === this.userData[i].userPassword) {
          this.loginFlag = true;
          sessionStorage.loggedInUser = JSON.stringify(userName);
        }
      }
    }

    this.username = "";
    this.password = "";


    if (this.loginFlag) {
      this.router.navigate(['../portfolio']);
    } else {
      alert("Please enter a valid email id and password or Sign Up for new account");
    }
  }
}
