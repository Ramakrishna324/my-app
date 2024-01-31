import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createaccounts',
  templateUrl: './createaccounts.component.html',
  styleUrls: ['./createaccounts.component.css']
})
export class CreateaccountsComponent {

  constructor(private _accountService:AccountService) {}

  public accountForm:FormGroup = new FormGroup({
    account_name : new FormControl(),
    available_balance : new FormControl(),
    account_number : new FormControl(),
    city : new FormControl(),
    profile_picture : new FormControl(),
  
  })

  submit(){
    console.log(this.accountForm.value);
    this._accountService.createAccounts(this.accountForm.value).subscribe(
      (data:any)=>{
        alert("Created succesfully")
      },
      (err:any)=>{
        alert("An error occured")
      }
    )
  }

}


