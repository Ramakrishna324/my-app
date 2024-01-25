import { Component } from '@angular/core';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent {

  public num:number = 0;
  public result:any=0 ;

  prime(){
    if(this.num>1){
      for(let i=2;i<this.num ;i++){
        if(this.num%i==0){
          this.result=this.num + " is not a prime number";
          break
        }
        
        else {
          this.result=this.num+ " is a prime number";
        }
      }
    }
    else if(this.num==0){
      this.result=this.num+ " is neither prime nor composite";
    }
    else {
      this.result=this.num+ " is not a prime number"
    }
  }
   
  }


