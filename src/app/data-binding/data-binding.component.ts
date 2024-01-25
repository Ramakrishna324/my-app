import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  public age:number = 24;
  public name:string = "Ramak";

  public ages:number[] = [1,4,5,55,66,6];
  public names:string[] = ["Vish","mani"];
  public user:any = {name:'Rama',age:23};

  public phone:string = "+91 ";
  

  submit(){
    alert("Submit pressed");
  }
  key(){
    alert("Key pressed");
  }

}
