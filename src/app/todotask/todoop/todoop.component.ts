import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todoop',
  templateUrl: './todoop.component.html',
  styleUrls: ['./todoop.component.css']
})
export class TodoopComponent {

  @Output() public todoevent:EventEmitter<any> = new EventEmitter();

  create(){

    this.todoevent.emit(1);

  }

  reset(){

    this.todoevent.emit(2);

  }

}
