import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  public ages:number[] = [10,20,30,40];
  public states:string[] = ["Andhra","Telangana","Goa"];

  public users:any = [
    {name:"Ramak",age:24,phone:656665},
    {name:"Rhsa",age:28,phone:569565},
    {name:"Radk",age:23,phone:989665},
    {name:"Ramasfak",age:29,phone:456665}
  ]

}
