import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {

  public len:number = 0;
  public bre:number = 0;

  public res:any = "";
  
  area(){
  
    this.res="Area is: "+this.len*this.bre;
  }
  peri(){
    this.res= "Perimeter is: "+2*this.len+2*this.bre;
  }



}
