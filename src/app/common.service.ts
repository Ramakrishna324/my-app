import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  
  public count:number = 0;

  public cresult:number = 0;

  public countSub$:BehaviorSubject<number> = new BehaviorSubject(0);

  public resultSub$:BehaviorSubject<number> = new BehaviorSubject(0);

  public vasuSub:BehaviorSubject<any> = new BehaviorSubject("");

  constructor() { }



  setVasu(data:any){

    this.vasuSub.next(data);

  }
  getVasu(){
    return this.vasuSub.asObservable();

  }














  setValue(){
    this.countSub$.next(++this.count)

  }

  getValue(){
    return this.countSub$.asObservable();
  }

  setCValue(data:number){
    this.resultSub$.next(data);
    
  }

  getCValue(){
    return this.resultSub$.asObservable();
  }

}
