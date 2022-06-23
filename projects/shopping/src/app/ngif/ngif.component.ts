import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  item: any = {
    name: "Lion",
    age: 27,
    photo: "assets/lion.jpeg"
    
  }
  isvisable = false;
  btntext = 'show'
 

  showdata() {
    this.btntext = (this.btntext == 'show') ? 'hide' : 'show';
    this.isvisable = (this.isvisable == false) ? true : false
  }
  

}
