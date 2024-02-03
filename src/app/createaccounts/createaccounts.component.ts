import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createaccounts',
  templateUrl: './createaccounts.component.html',
  styleUrls: ['./createaccounts.component.css']
})
export class CreateaccountsComponent {

  public id:string = "";


  constructor(private _accountService:AccountService, private _activatedRoute:ActivatedRoute,private _router:Router) {

    _activatedRoute.params.subscribe(
      (data:any)=>{

        this.id=data.id;

        if(this.id){
          _accountService.getAccount(data.id).subscribe(
            (data:any)=>{
  
              this.accountForm.patchValue(data);
  
            },
            (err:any)=>{
              alert("An error occured");
            }
          )
  
        }
        
        
      }
    )


  }

  public accountForm:FormGroup = new FormGroup({
    account_name : new FormControl(),
    available_balance : new FormControl(),
    account_number : new FormControl(),
    city : new FormControl(),
    profile_picture : new FormControl(),
  
  })

  submit(){
    
    if(this.id){

      this._accountService.updateAccounts(this.id,this.accountForm.value).subscribe(
        (data:any)=>{
          alert("Updated succesfully");
          this._router.navigateByUrl("/dashboard/accounts")

        },
        (err:any)=>{
          alert("An error occured")
        }
      )

    }
    else{
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

}


