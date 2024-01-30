import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-pushvehicles',
  templateUrl: './pushvehicles.component.html',
  styleUrls: ['./pushvehicles.component.css']
})
export class PushvehiclesComponent {

constructor( private _vehicleService:VehicleService) {}

public vehicleForm:FormGroup = new FormGroup({
  Vehicle : new FormControl(),
  manufacturer : new FormControl(),
  model : new FormControl(),
  type: new FormControl(),
  color : new FormControl(),
  image : new FormControl()
})

submit(){
  console.log(this.vehicleForm.value);
  
  this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
    (data:any) =>{
      alert("Created succesfullt");
      this.vehicleForm.reset();
    },
    (err:any)=>
    {
    alert("Internal error")
    }  )

}


}


