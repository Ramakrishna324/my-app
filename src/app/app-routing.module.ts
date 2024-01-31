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
import { EventComponent } from './event/event.component';
import { CarsComponent } from './cars/cars.component';
import { EmployeeComponent } from './employee/employee.component';
import { BikesComponent } from './bikes/bikes.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountComponent } from './account/account.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { ActivityComponent } from './activity/activity.component';
import { MemesComponent } from './memes/memes.component';
import { StudentsComponent } from './students/students.component';
import { PushvehiclesComponent } from './pushvehicles/pushvehicles.component';
import { CreatestudentsComponent } from './createstudents/createstudents.component';
import { CreateaccountsComponent } from './createaccounts/createaccounts.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'dashboard', canActivate:[AuthenticationGuard],component: DashboardComponent,children:[
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
    {path:'shopping',component:ShoppingComponent},
    {path:'event',component:EventComponent},
    {path:'cars',component:CarsComponent},
    {path:'employee',component:EmployeeComponent},
    {path :'bikes',component:BikesComponent},
    {path : 'vehicles', component:VehicleComponent},
    {path : 'accounts', component:AccountComponent},
    {path : 'flipkart', component:FlipkartComponent},
    {path : 'mail', component:MailComponent},
    {path : 'activity', component:ActivityComponent},
    {path : 'memes', component:MemesComponent},
    {path : 'students', component:StudentsComponent},
    {path:'pushvehicles', component:PushvehiclesComponent},
    {path:'createstudents', component:CreatestudentsComponent},
    {path:'createaccounts', component:CreateaccountsComponent},
    {path:'createuser',component:CreateUserComponent}

  ]},
  {path:'',component: LoginComponent},
  {path:'**',component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
