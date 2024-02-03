import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-directories',
  templateUrl: './directories.component.html',
  styleUrls: ['./directories.component.css']
})
export class DirectoriesComponent {

  public name:string = ""
  public phone:number = 0;

  public newForm:FormGroup = new FormGroup({
    name : new FormControl(),
    age:new FormControl(),
    
  })



}
