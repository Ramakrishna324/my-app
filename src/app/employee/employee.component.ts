import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  public employees:any[] = [
    {name:"Ramakrishna",company:"TCS",experience:5,package:1100000,isWorking:true},
    {name:"Abhinav",company:"Accenture",experience:6,package:1300000,isWorking:true},
    {name:"Shekhar",company:"Optum",experience:4,package:1200000,isWorking:false},
    {name:"Anil",company:"Cognizent",experience:8,package:1000000,isWorking:true},
    {name:"Sunil",company:"Deloitte",experience:2,package:1600000,isWorking:true},
    {name:"Mani",company:"Wipro",experience:1,package:900000,isWorking:false},
    {name:"Punju",company:"Bosch",experience:9,package:500000,isWorking:false}
  ];

eltoh(){
  this.employees = this.employees.sort((a:any,b:any)=>(a.experience-b.experience));
}


ehtol(){
  this.employees = this.employees.sort((a:any,b:any)=>(b.experience-a.experience));
}


pltoh(){
  this.employees = this.employees.sort((a:any,b:any)=>(a.package-b.package));
}


phtol(){
  this.employees = this.employees.sort((a:any,b:any)=>(b.package-a.package));
}

hike(){
  this.employees = this.employees.map((a:any)=>{
    a.package = a.package + (a.package/5);
    return a;
  })
}

bonus(){
  this.employees = this.employees.map((a:any)=>{
    a.package = a.package + 50000;
    return a;
  })
}

db5(){
  this.employees = this.employees.filter((a:any)=>a.experience<5)
}

da5(){
  this.employees = this.employees.filter((a:any)=>a.experience>=5)
}

totalc(){
  let totalc = this.employees.reduce((a:any,b:any)=>a+b.package,0);
  alert(totalc)

}

totale(){
  let totalc = this.employees.reduce((a:any,b:any)=>a+b.package,0);
  alert(totalc)
}



}
