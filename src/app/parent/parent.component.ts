import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  public ap:string = "";
  public bp:string = "";

  public rating:number = 0;

  public max:number = 0;

  catch(data:any){
    this.bp=data;
  }

}
