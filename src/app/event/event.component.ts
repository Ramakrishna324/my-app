import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  public user:any = {name:""};
  public entrys:any[] = [{name:"Ramakrishna"}];
  

submit(){
  this.entrys.push({...this.user});
}

delete(i:number){
  this.entrys.splice(i,1);
}


}
