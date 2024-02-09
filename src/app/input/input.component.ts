import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  constructor(private _commonService:CommonService){
    

  }

  public num1:number = 0;
  public num2:number = 0;

  public result:number = 0;

  catch(value:any){

    this.result=value;
    this._commonService.setCValue(this.result);

  }

}
