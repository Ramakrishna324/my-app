import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {

  public rad:number = 0;
  

  public res:number = 0;
  
  area(){
    
    this.res=this.rad*this.rad*3.14;
  }
  peri(){
    this.res=2*this.rad*3.14;
  }

}
