import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userList: any = [];
  fName: any;
  lName: any;
  userName: any;
  password: any;

  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmit(data) {
    let fName = data.fName;
    let lName = data.lName;
    let userName = data.userName;
    let passWord = data.password;

    let userObj = {
      userFirstName: fName,
      userLastName: lName,
      userUserName: userName,
      userPassword: passWord,
    }

    this.userList.push(userObj);
    sessionStorage.myObject = JSON.stringify(this.userList);

    this.fName = "";
    this.lName = "";
    this.userName = "";
    this.password = "";
  }
}
