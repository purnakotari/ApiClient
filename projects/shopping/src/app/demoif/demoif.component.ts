import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demoif',
  templateUrl: './demoif.component.html',
  styleUrls: ['./demoif.component.css']
})
export class DemoifComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isvisable = false;
  btntext = 'show';
  
  public product: any = {
    name: "Doller",
    manfactured: "india",
    photo: "assets/watches.jpg"

  }


  showdata() {
    this.isvisable = (this.isvisable == false) ? true : false;
    this.btntext = (this.btntext == 'show') ? 'hide' : 'show'

  }
 


}
