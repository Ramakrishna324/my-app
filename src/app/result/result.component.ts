import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  public result:number = 0;

  constructor(private _commonService:CommonService){
    
    _commonService.getCValue().subscribe(
      (data)=>{
        this.result=data;
        
      }
    )

  }

 
  

  


  
  
  

}
