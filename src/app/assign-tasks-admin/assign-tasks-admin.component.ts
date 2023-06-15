import { Component } from '@angular/core';
import { taskassign1 } from './taskassign1';

@Component({
  selector: 'app-todo-menu',
  templateUrl: './assign-tasks-admin.component.html',
  styleUrls: ['./assign-tasks-admin.component.css']
})
export class AssignTasksAdminComponent 
{
  title = 'ToDo List';
  result: string = 'Your result goes here';

  todoValue!: string;
  myTaskList!: taskassign1[];

  ngOnInit() {
    this.myTaskList = [];
    this.todoValue = "";
  }

  addItem() {
    if (this.todoValue !== "") {
      const newItem: taskassign1 = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      };
      this.myTaskList.push(newItem);
    }
    this.todoValue = "";
  }

  deleteItem(id: number) 
  {
    this.myTaskList = this.myTaskList.filter(item => item.id !== id);
  }
  // result: string = '';

  // // Example method to update the result
  // updateResult(): void {
  //   // Perform some calculation or fetch result from an API
  //   this.result = 'Example Result';
  // }
  selectedButton: number = 0;

  selectButton(buttonNumber: number): void 
  {
    this.selectedButton = buttonNumber;
  }
  
}
