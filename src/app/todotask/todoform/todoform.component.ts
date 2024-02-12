import { Component } from '@angular/core';
import { TodocommonService } from '../todocommon.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent {

  public todoformarray:any=[];
  public todoForm:any={};


  constructor(private _todocommonService:TodocommonService) {

    _todocommonService.getValue().subscribe(
      (data:any)=>{
        if(data){
          this.todoForm=data;
          this.todoformarray.push(this.todoForm)
        }
       

      }
    )

  }

  view(form:any){

    this._todocommonService.viewValue(form);

  }
  edit(form:any){

    this._todocommonService.editValue(form);

  }
  delete(i:number){
    this.todoformarray.splice(i,1)

  }



}
