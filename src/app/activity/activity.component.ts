import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {

  public activity:any = {};
  public activities:any = {};

  constructor(private _activityService:ActivityService){

    _activityService.getActivity().subscribe(
      (data:any)=>{
        this.activity = data;

      },
      (err:any)=>{

        alert("Internal server error");
      }
    )
  }

  refresh(){
    this._activityService.getActivity().subscribe(
      (data:any)=>{
        this.activity = data;

      },
      (err:any)=>{

        alert("Internal server error");
      }
    )

  }

}
