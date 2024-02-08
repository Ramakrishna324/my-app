import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewtaskService {

  constructor(private _httpClient:HttpClient) { }

  getTask():Observable<any>{
    return this._httpClient.get("https://62abe711bd0e5d29af16f450.mockapi.io/products")
  }

  deleteTask(id:number):Observable<any>{
    return this._httpClient.delete("https://62abe711bd0e5d29af16f450.mockapi.io/products/" +id)
  }

  

}
