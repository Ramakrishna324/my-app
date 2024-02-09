import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-siblings1',
  templateUrl: './siblings1.component.html',
  styleUrls: ['./siblings1.component.css']
})
export class Siblings1Component {

  constructor(private _commomservice:CommonService) {

  }

  add(){

    this._commomservice.setValue();

  }

}
