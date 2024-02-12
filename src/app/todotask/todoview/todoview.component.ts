import { Component } from '@angular/core';
import { TodocommonService } from '../todocommon.service';

@Component({
  selector: 'app-todoview',
  templateUrl: './todoview.component.html',
  styleUrls: ['./todoview.component.css']
})
export class TodoviewComponent {

  public viewform:any = {};

  constructor(private _todocommonService:TodocommonService) {

    _todocommonService.getviewValue().subscribe(
      (data:any)=>{

        if(data){
          
        this.viewform=data;
        
        }

      }
    )

  }

}
