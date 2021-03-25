import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  contactList: any = [];
  userName: String = JSON.parse(sessionStorage.loggedInUser);
  contactName: any;
  phoneNumber: any;

  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmit(data) {
    let contactName = data.contactName;
    let phoneNumber = data.phoneNumber;

    let contactObj = {
      contactName: contactName,
      phoneNumber: phoneNumber
    }

    this.contactList.push(contactObj);

    this.contactName = "";
    this.phoneNumber = "";

  }

}
