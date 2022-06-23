import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public oddeven = {
    firstNumber: 10,
    secondNumber: 13,
    thirdNumber: 20,
    fourthNumber: 30
  }

  public onevenodd(oddeven:any)
  {
    
        this.oddeven.firstNumber=10;
        this.oddeven.secondNumber=13;
        this.oddeven.thirdNumber=60;
        this.oddeven.fourthNumber=30;

    }
    
   }
    
  


   







