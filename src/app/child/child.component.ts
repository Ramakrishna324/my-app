import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  public childdata:string = "";

  public bc:string = "";

  @Input() public ac:string = "";

  // @Output() public bEvent:EventEmitter<string> = new EventEmitter();

  @Output() public childevent:EventEmitter<string> = new EventEmitter();

  send(){

    // this.bEvent.emit(this.bc)

  }

  submit(){
    this.childevent.emit("1233")

  }

}
