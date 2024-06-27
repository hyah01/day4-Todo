export class TodoService {
  session: string[] = [];
  tasks: any[] = [];

  saveData(task: string, detail: string) {
    if (task != '') {
      // make sure task is not empty but detail can be empty
      let date: string = new Date().toISOString();
      let data = { task: task, detail: detail, date: date, completed: false}; // store date so delete can use it
      localStorage.setItem(date, JSON.stringify(data)); // set key to be the date, better usage for deletion and creation
      this.session.push(date);
      this.loadData(); // update website
    }
  }

  loadData() {
    if (typeof localStorage != 'undefined') {
      this.tasks = [];
      Object.keys(localStorage).forEach((taskKey) => { // object.keys give all the key,value pair 
        if (taskKey != 'debug') { // take care of debug so it doesn't try to parse it
          const task = localStorage.getItem(taskKey);
          if (task) {
            try {
              this.tasks.push(JSON.parse(task));
            } catch (e) {
              console.log('Invalid JSON in LocalStorage', task);
            }
          }
        }
      });
    }
  }

  deleteData(date: string) {
    localStorage.removeItem(date);
    this.loadData();
  }
}
