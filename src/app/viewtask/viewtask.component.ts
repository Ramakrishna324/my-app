import { Component } from '@angular/core';
import { ViewtaskService } from '../viewtask.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent {

  public task:any = [];

  

  constructor(private _viewtaskService:ViewtaskService,private _router:Router) {

    _viewtaskService.getTask().subscribe(
      (data:any)=>{
        this.task = data;

      },
      (err:any)=>{
        alert("Internal error occcured")
      }
    )

  }

  edit(id:string){
    this._router.navigateByUrl("/dashboard/edit-task/"+id)

  }

  delete(id:number) {
    this._viewtaskService.deleteTask(id).subscribe(
      (data:any)=>{
        this.task = data;
        alert("Item deleted successfully");
        location.reload();
        

      },
      (err:any)=>{
        alert("Internal error occcured")
      }
    )

  }

  
  

}
