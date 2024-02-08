import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatetaskService {

  private baseUrl:any  = "https://62abe711bd0e5d29af16f450.mockapi.io/products";

  constructor(private _httpClient:HttpClient) { }

  pushCreate(data:any):Observable<any>{
    return this._httpClient.post(this.baseUrl,data)
  }

  getCreate(id:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"/"+id)
  }
  
  updateCreate(id:string,data:any):Observable<any>{
    return this._httpClient.put(this.baseUrl+"/"+id,data)
  }
  

}
