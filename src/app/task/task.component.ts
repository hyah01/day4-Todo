import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task: string = '';
  detail: string = '';
  
  constructor(private todoService: TodoService){

  }

  saveData() {
    this.todoService.saveData(this.task, this.detail);
  }

  get tasks() {
    return this.todoService.tasks;
  }

  deleteData(date: string) {
    this.todoService.deleteData(date);
  }
}
