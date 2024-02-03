import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreatetaskService } from '../createtask.service';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css']
})
export class CreatetaskComponent {

  constructor(private _createtasksService:CreatetaskService) {}

 
  public sellerForm:FormGroup = new FormGroup({
    name  : new FormControl("",[Validators.required]),
    price  : new FormControl("",[Validators.required,Validators.min(0)]),
    model  : new FormControl("",[Validators.required]),
    freeDelivery  : new FormControl("",[Validators.required]),
    image  : new FormControl("",[Validators.required]),
    waranty : new FormGroup({
      eligible  : new FormControl("",[Validators.required]),
      months  : new FormControl("",[Validators.required,Validators.min(0)])

    }),
    ratings  : new FormGroup({
      one  : new FormControl("",[Validators.required]),
      two  : new FormControl("",[Validators.required]),
      three  : new FormControl("",[Validators.required]),
      four  : new FormControl("",[Validators.required]),
      five  : new FormControl("",[Validators.required])

    }),
    sellerInfo : new FormArray([]),
    comments : new FormArray([]),
    productType: new FormControl(),
    height: new FormControl(),
    width: new FormControl(),
    weight: new FormControl()
  });

  get sellerFormArray() {
    return this.sellerForm.get('sellerInfo') as FormArray;
  }

  addseller() {
    this.sellerFormArray.push(
      new FormGroup({
        name :new FormControl("",[Validators.required]),
        address : new FormGroup({
          line1 : new FormControl("",[Validators.required]),
          area : new FormControl("",[Validators.required]),
          city : new FormControl("",[Validators.required]),
          pincode : new FormControl("",[Validators.required,Validators.min(100000),Validators.max(999999)])
        })
      })
    )
  }

  get commentsFormArray() {
    return this.sellerForm.get('comments') as FormArray;
  }

  addcomments(){
    this.commentsFormArray.push(
      new FormGroup({
        time : new FormControl("",[Validators.required]),
        message : new FormControl("",[Validators.required,Validators.maxLength(10)])
      })
    )
  }

  deleteseller(i:number){
    this.sellerFormArray.removeAt(i);

  }

  deletecomments(i:number){
    this.commentsFormArray.removeAt(i);
  }

  // submit(){
  //   console.log(this.sellerForm);
  //   console.log(this.sellerFormArray)
  // }

  pushdata(){

    console.log(this.sellerForm.value);

    this._createtasksService.pushCreate(this.sellerForm.value).subscribe(
      (data:any)=>{
        alert("Succesfully added")
      },
      (err:any)=>{
        alert("An err0r occured")
      }
    )
    
  }


}
