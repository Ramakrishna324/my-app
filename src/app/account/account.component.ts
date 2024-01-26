import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  public accounts:any = [];

  constructor( private _accountService:AccountService) { 

    _accountService.getAccounts().subscribe(

      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Inter server eror")
      }

    )
  }

}
