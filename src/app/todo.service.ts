export class TodoService {
  session: string[] = [];
  tasks: any[] = [];

  ngOnInit(){
    this.loadData();
  }

  saveData(task: string, detail: string) {
    if ((task != '')){
      let date: string = (new Date()).toISOString();
      let data = {task: task,detail: detail, date: date};
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