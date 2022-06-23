import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public login:any={
    userName:"",
    password:"",
    Email:"",
    PhoneNumber:+91,
    Address:""
  }

}
