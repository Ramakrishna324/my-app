import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public baseUrl:any = "https://6128991386a213001729f9df.mockapi.io/test/v1/principals"

  constructor(private _httpClient:HttpClient) { }

    getAccounts():Observable<any>{

      return this._httpClient.get(this.baseUrl);

    }

    getAccount(id:string):Observable<any>{

      return this._httpClient.get(this.baseUrl+"/"+id);

    }

    createAccounts(data:any):Observable<any>
    {
      return this._httpClient.post(this.baseUrl,data)
  
    }

    updateAccounts(id:string,data:any):Observable<any>
    {
      return this._httpClient.put(this.baseUrl+"/"+id,data)
  
    }

    deleteAccounts(id:string):Observable<any>
    {
      return this._httpClient.delete(this.baseUrl+"/"+id)
  
    }
  

   
}
