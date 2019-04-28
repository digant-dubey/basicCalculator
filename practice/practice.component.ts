import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  curNum:Number;
  operation:any;
  final: any = null;
  constructor() { }

  ngOnInit() {
  }

  val(num){
    this.curNum = num;
  }

  add(){
    if(this.final === null){
    this.newNum = this.curNum;
    }
    else{
      this.newNum = this.final;
    }
    this.operation = 'add';
  }

  mul(){
    if(this.final === null){
      this.newNum = this.curNum;
      }
      else{
        this.newNum = this.final;
      }
    this.operation = 'mul';
  }

  div(){
    if(this.final === null){
      this.newNum = this.curNum;
      }
      else{
        this.newNum = this.final;
      }
    this.operation = 'div';
  }

  sub(){
    if(this.final === null){
      this.newNum = this.curNum;
      }
      else{
        this.newNum = this.final;
      }
    this.operation = 'sub';
  }

  equal(){
    if (this.operation === 'add') {
      this.final = this.newNum+this.curNum;
    }
    else  if (this.operation === 'mul') {
      this.final = this.newNum*this.curNum;      
    }
    else  if (this.operation === 'div') {
      this.final = this.newNum/this.curNum;      
    }
    else  if (this.operation === 'sub') {
      this.final = this.newNum-this.curNum;      
    }
  }

}
