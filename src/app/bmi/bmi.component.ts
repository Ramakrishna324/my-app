import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {

  public hei:number = 0;
  public wei:number = 0;

  public res:number = 0;
  
  bmi(){
    
    this.res=(this.wei)/(this.hei*100)*(this.hei)/(this.hei*100);
  }


}
