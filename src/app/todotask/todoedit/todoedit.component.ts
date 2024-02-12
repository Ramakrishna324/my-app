import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodocommonService } from '../todocommon.service';

@Component({
  selector: 'app-todoedit',
  templateUrl: './todoedit.component.html',
  styleUrls: ['./todoedit.component.css']
})
export class TodoeditComponent {

  public data:number = 0;

  public todoForm:FormGroup = new FormGroup({
    task : new FormControl(),
    time : new FormControl()
  })

  constructor(private _todocommonservice:TodocommonService) {
    _todocommonservice.geteditValue().subscribe(
      (data:any)=>{
        this.todoForm.patchValue(data);
        console.log(data)
      }
    )

  }

  submit(){
    console.log(this.todoForm)
  }
  catch(value:any){
    this.data = value;
    if(this.data==1){
      this._todocommonservice.setValue(this.todoForm.value)
    }
    else if(this.data==2){
      this.todoForm.reset();
    }
  }

 
}
