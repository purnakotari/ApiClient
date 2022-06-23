import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public todolist:string=""


  public listArray:any=[];

  addlist(){
    if(this.todolist==""){
    }
    else
    {
    this.listArray.push(this.todolist);
    this.todolist=''
    }
    }
  
  remove(index:any){
    this.listArray.splice(index,1)
  }

}
