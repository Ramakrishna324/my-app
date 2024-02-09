import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-siblings2',
  templateUrl: './siblings2.component.html',
  styleUrls: ['./siblings2.component.css']
})
export class Siblings2Component {

  public cartCount:number = 0;

  constructor(private _commomservice:CommonService) {

    _commomservice.getValue().subscribe(
      (data)=>{
        this.cartCount = data;
      }
    )

  }




}
