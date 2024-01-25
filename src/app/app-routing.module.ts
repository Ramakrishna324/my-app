import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundError } from 'rxjs';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { PrimeComponent } from './prime/prime.component';
import { DirectoriesComponent } from './directories/directories.component';
import { DirectivesComponent } from './directives/directives.component';
import { MarksComponent } from './marks/marks.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'dashboard',component: DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'',component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'data-binding', component:DataBindingComponent},
    {path:'calculator', component:CalculatorComponent},
    {path:'rectangle', component:RectangleComponent},
    {path:'circle', component:CircleComponent},
    {path:'bmi', component:BmiComponent},
    {path:'prime', component:PrimeComponent},
    {path:'directories',component:DirectoriesComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'marks',component:MarksComponent},
    {path:'shopping',component:ShoppingComponent}
  ]},
  {path:'',component: LoginComponent},
  {path:'**',component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
