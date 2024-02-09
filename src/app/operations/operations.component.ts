import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent {

  @Input() public n1:number = 0;
  @Input() public n2:number = 0;
  

  @Output() public cEvent:EventEmitter<number> = new EventEmitter();


  add(){
    this.cEvent.emit(this.n1+this.n2);

  }
  sub(){
    this.cEvent.emit(this.n1-this.n2);
    
  }
  mul(){
    this.cEvent.emit(this.n1*this.n2);
    
  }
  div(){
    this.cEvent.emit(this.n1/this.n2);
    
  }

}
