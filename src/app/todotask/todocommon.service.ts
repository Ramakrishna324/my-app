import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodocommonService {


  public todoSub$:BehaviorSubject<any> = new BehaviorSubject("");

  public viewSub$:BehaviorSubject<any> = new BehaviorSubject("");

  public editSub$:BehaviorSubject<any> = new BehaviorSubject("");

  constructor() { }

  setValue(value:any){
    this.todoSub$.next(value);
  }

  getValue(){
    return this.todoSub$.asObservable();
  }

  viewValue(value:any){
    this.viewSub$.next(value);
  }

  getviewValue(){
    return this.viewSub$.asObservable();
  }

  editValue(value:any){
    this.editSub$.next(value);
  }

  geteditValue(){
    return this.editSub$.asObservable();
  }

}
