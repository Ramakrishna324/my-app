import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-createstudents',
  templateUrl: './createstudents.component.html',
  styleUrls: ['./createstudents.component.css']
})
export class CreatestudentsComponent {

  constructor(private _studentsService:StudentsService){}

  public studentForm:FormGroup = new FormGroup({
    name : new FormControl(),
    phone : new FormControl(),
    city  :new FormControl(),
    fee : new FormControl(),
    image : new FormControl()
  })

  submit(){
    console.log(this.studentForm.value);
    this._studentsService.createStudents(this.studentForm.value).subscribe(
      (data:any)=>{
        alert("Succesfully added")
      },
      (err:any)=>{
        alert("An err0r occured")
      }
    )
  }

}
