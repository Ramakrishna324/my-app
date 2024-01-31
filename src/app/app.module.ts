import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { PrimeComponent } from './prime/prime.component';
import { DirectoriesComponent } from './directories/directories.component';
import { DirectivesComponent } from './directives/directives.component';
import { MarksComponent } from './marks/marks.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { PricePipe } from './price.pipe';
import { StarPipe } from './star.pipe';
import { EventComponent } from './event/event.component';
import { CarsComponent } from './cars/cars.component';
import { EmployeeComponent } from './employee/employee.component';
import { BikesComponent } from './bikes/bikes.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from '@angular/common/http';
import { AccoumtsComponent } from './accoumts/accoumts.component';
import { AccountComponent } from './account/account.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { ActivityComponent } from './activity/activity.component';
import { MemesComponent } from './memes/memes.component';
import { StudentsComponent } from './students/students.component';
import { PushvehiclesComponent } from './pushvehicles/pushvehicles.component';
import { CreatestudentsComponent } from './createstudents/createstudents.component';
import { CreateaccountsComponent } from './createaccounts/createaccounts.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NotfoundComponent,
    HomeComponent,
    AboutComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    PrimeComponent,
    DirectoriesComponent,
    DirectivesComponent,
    MarksComponent,
    ShoppingComponent,
    PricePipe,
    StarPipe,
    EventComponent,
    CarsComponent,
    EmployeeComponent,
    BikesComponent,
    VehicleComponent,
    AccoumtsComponent,
    AccountComponent,
    FlipkartComponent,
    MailComponent,
    ActivityComponent,
    MemesComponent,
    StudentsComponent,
    PushvehiclesComponent,
    CreatestudentsComponent,
    CreateaccountsComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
