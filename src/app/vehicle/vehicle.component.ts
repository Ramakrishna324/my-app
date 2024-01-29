import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  public vehicles:any = [];
  public term:string = "";

  public column:string = "";
  public order :string = "";

  public page:number = 0;

  constructor(private _vehicleService:VehicleService){

    _vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles = data;

      },
      (err:any)=>{
        alert("Internal server error");

      }
      
    )

  }

  delete(id:string){
    this._vehicleService.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert(data.Vehicle +" Deleted succesfully");
        location.reload();


      },
      (err:any)=>{
        alert("deletion error occured");
      }
    )
  }

  filter(){
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{

        this.vehicles = data;

      },
      (err:any)=>{
        alert("FIlter error occured")
      }
    )
  }

  sort(){
    this._vehicleService.getSortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles = data;

      },
      (err:any)=>{
        alert("Sorrting error occured");
      }
    )
  }

  pagination(){
    this._vehicleService.getPagedVehicles(this.page).subscribe(

      (data:any)=>{
        this.vehicles = data;

      },
      (err:any)=>{
        alert("Pagination error occured");
      }

    )
  }




}
