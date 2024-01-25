import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent {

  public term:string = "";

  public product:any = {name:"",price:0,rating:0,delivery:false};


 
  

  public items:any[] = [
    {name : "Pen", price : 50,rating:5,delivery:true},
    {name : "Case", price : 299,rating:3,delivery:false},
    {name : "Jeans", price : 450,rating:3.5,delivery:true},
    {name : "Remote", price : 300,rating:2,delivery:false},
    {name : "Books",price : 100,rating:4.8,delivery:true},
    {name : "Blanket",price :400,rating:3.9,delivery:true},
    {name : "Shoes",price : 600,rating:5,delivery:true},
    {name : "Cap",price : 5,rating:3,delivery:false}
  ]

  plowtohigh(){
    this.items = this.items.sort((a:any,b:any)=>a.price-b.price);
  }
  phightolow(){
    this.items = this.items.sort((a:any,b:any)=>b.price-a.price);
  }
  rlowtohigh(){
    this.items = this.items.sort((a:any,b:any)=>a.rating-b.rating);
  }
  rhightolow(){
    this.items = this.items.sort((a:any,b:any)=>b.rating-a.rating);
  }
  
  filter(){
    this.items = this.items.filter((item:any)=>item.name.includes(this.term))
  }
  dfilter(){
    this.items = this.items.filter((item:any)=>item.delivery==true)
  }
  discount(){
    this.items = this.items.map((item:any)=>{
      item.price = item.price/2;
      return item;
      
    })
  }
  charges(){
    this.items = this.items.map((item:any)=>{
      if(item.delivery==false){
        item.price = item.price + 50;
        return item;
        
      }
      else{
        return item;
      }
      
    })
  }

  total(){
    let totalPrice = this.items.reduce((sum:any,item:any)=>sum+item.price,0);
    alert(totalPrice);

  }
  carttotal(){
    let totalItems = this.items.length;
    alert(totalItems);

  }
additems(){
  this.items.push({...this.product})
}

delete(i:number){
  this.items.splice(i,1);
}



}
