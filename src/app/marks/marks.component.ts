import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent {

  public marks:any[] = [
    {name : "Rama", subject : "Maths",marks:"50",result:"Pass"},
    {name : "Krishna", subject : "Physicss",marks:"30",result:"Pass"},
    {name : "Vishnu", subject : "English",marks:"60",result:"Pass"},
    {name : "Bama", subject : "Che,istry",marks:"17",result:"Fail"},
    {name : "Mama", subject : "Hindi",marks:"50",result:"Pass"},
    {name : "Rama", subject : "Telugu",marks:"5",result:"Fail"}
  ]

 
  public today:any = new Date();


}
