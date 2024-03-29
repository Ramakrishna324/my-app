import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pushvehicles',
  templateUrl: './pushvehicles.component.html',
  styleUrls: ['./pushvehicles.component.css']
})
export class PushvehiclesComponent {

  public id: string = "";

  constructor(private _vehicleService: VehicleService, private _activatedRoute: ActivatedRoute, private _router: Router) {

    _activatedRoute.params.subscribe(
      (data: any) => {

        this.id = data.id;

        if (this.id) {

          _vehicleService.getVehicle(data.id).subscribe(
            (data: any) => {
              this.vehicleForm.patchValue(data);

              

            },
            (err: any) => {
              alert("An error occured")
            }
          )

        }


      }
    )

  }

  public vehicleForm: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    color: new FormControl(),
    image: new FormControl()
  })

  submit() {


    if (this.id) {

      this._vehicleService.updateVehicle(this.id, this.vehicleForm.value).subscribe(
        (data: any) => {
          alert("Updated succesfully");

          this._router.navigateByUrl("/dashboard/vehicles")
        },
        (err: any) => {
          alert("Internal update error")
        }
      )

    }
    else {
      this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
        (data: any) => {
          alert("Created succesfullt");
          this.vehicleForm.reset();
          this._router.navigateByUrl("/dashboard/vehicles")
        },
        (err: any) => {
          alert("Internal error")
        })
    }


  }


}


