import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoformComponent } from './todoform/todoform.component';
import { TodoeditComponent } from './todoedit/todoedit.component';
import { TodoviewComponent } from './todoview/todoview.component';



@NgModule({
  declarations: [
    TodoComponent,
    TodoformComponent,
    TodoeditComponent,
    TodoviewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodoComponent,
    TodoformComponent,
    TodoeditComponent,
    TodoviewComponent
  ]
})
export class TodotaskModule { }
