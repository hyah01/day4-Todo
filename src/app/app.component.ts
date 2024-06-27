import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day4-Todo';
  name: string = '';
  task: string = '';
  session: string[] = [];
  tasks: any[] = [];

  ngOnInit(){
    this.loadData();
  }

  saveData(){
    console.log(this.name);
    if ((this.name != '') && (this.task != '')){
      let date: string = (new Date()).toISOString();
      let data = {name: this.name,task: this.task, date: date};
      localStorage.setItem(date,JSON.stringify(data));
      this.session.push(date);
      this.loadData();
    }
  }

  loadData() {
    this.tasks = [];
    this.session.forEach((taskKey) => {
      const task = localStorage.getItem(taskKey);
      if (task){
        this.tasks.push(JSON.parse(task));
      }
    })
  }

  deleteData(date:string){
    localStorage.removeItem(date);
    this.loadData();
  }


}
