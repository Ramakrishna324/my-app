import { Component } from '@angular/core';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent {


  public memes:any = {};

  constructor(private _memeService:MemesService){

    _memeService.getMeme().subscribe(
      (data:any)=>{
        this.memes = data;

      },
      (err:any)=>
      {
        alert("An error occured")

      }    )

  }


}
