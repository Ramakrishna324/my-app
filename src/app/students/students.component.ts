import { Component } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  public students:any = [];

  public term :string  = "";

  public name:string = "name";
  public order:string = "asc";

  public page:number = 0;
  


  constructor(private _studentService:StudentsService){

    _studentService.getStudents().subscribe(
      (data:any)=>{

        this.students  = data;

      },
    (err:any)=>{
      alert("Internal server error")
    }
    )
  }

  delete(id:number){

    this._studentService.deleteStudents(id).subscribe(
      (data:any)=>{

        alert(data.name+" deleted succesfullt");
        location.reload();

      },
    (err:any)=>{
      alert("Internal server error")
    }
    )

  }

  filter(){
    this._studentService.getfilteredStudents(this.term).subscribe(
      (data:any)=>{

        this.students  = data;

      },
    (err:any)=>{
      alert("Internal server error")
    }
    )
  }


  sort(){
    this._studentService.getsortedStudents(this.name,this.order).subscribe(
      (data:any)=>{

        this.students  = data;

      },
    (err:any)=>{
      alert("Internal server error")
    }
    )
  }

  paging(){
    this._studentService.getpagedStudents(this.page).subscribe(
      (data:any)=>{

        this.students  = data;

      },
    (err:any)=>{
      alert("Internal server error")
    }
    )
  }




}
