import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  public accounts:any = [];

  constructor( private _accountService:AccountService, private _router:Router) { 

    _accountService.getAccounts().subscribe(

      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Inter server eror")
      }

    )
  }

  edit(id:number){

    this._router.navigateByUrl("/dashboard/edit-account/"+id)

  }
  delete(id:string){
    this._accountService.deleteAccounts(id).subscribe(
      (data:any)=>{
        alert("Item deleted succesfully")
        this.accounts = data;
        location.reload();
      },
      (err:any)=>{
        alert("Inter server eror")
      }  
    )

  }

}
