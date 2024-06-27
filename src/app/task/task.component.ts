import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit{
  // bounded these to input and textarea
  task: string = '';
  detail: string = '';

  // inject service into class
  constructor(private todoService: TodoService){
  }

  // load local data when refreshed
  ngOnInit(){
    this.todoService.loadData();
  }

  saveData() {
    this.todoService.saveData(this.task, this.detail);
    console.log('Added: ', this.task)
    this.task = ''; // Clear task when save
    this.detail = ''; // Clear detail when save
  }

  get tasks() {
    return this.todoService.tasks;
  }

  // delete data based on the key from localStorage
  deleteData(date: string) {
    this.todoService.deleteData(date);
    console.log('Deleted: ', date)
  }

  toggleComplete(date: string){
    let taskString = localStorage.getItem(date);
    if (taskString){
      let task = JSON.parse(taskString);
      task.completed = !task.completed;
      localStorage.setItem(date, JSON.stringify(task))
      this.todoService.loadData();
    }
  }
}
