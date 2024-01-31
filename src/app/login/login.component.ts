import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _loginService:LoginService, private _router:Router) {}

  public loginForm:FormGroup = new FormGroup({
    email : new FormControl(),
    password : new FormControl()
  })

  login(){
    console.log(this.loginForm.value);
    this._loginService.createLogin(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("Login Succesful");
        this._router.navigateByUrl("/dashboard");
        // store
        localStorage.setItem("myapp-token",data.token)
      },
      (err:any)=>{
        alert("Invalid data");
      }
    )
  }

}
