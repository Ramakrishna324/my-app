import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoformComponent } from './todoform/todoform.component';
import { TodoeditComponent } from './todoedit/todoedit.component';
import { TodoviewComponent } from './todoview/todoview.component';
import { TodoopComponent } from './todoop/todoop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TodoComponent,
    TodoformComponent,
    TodoeditComponent,
    TodoviewComponent,
    TodoopComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoComponent,
    TodoformComponent,
    TodoeditComponent,
    TodoviewComponent,
    TodoopComponent
  ]
})
export class TodotaskModule { }
