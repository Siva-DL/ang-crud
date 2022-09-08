import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  // our Todo Items List:
  todoList: any[] = [];
  itemVal: string = '';
  editedVal: any = {};

  // todoList: [
  //   {
  //     id: string;
  //     todoItem: string;
  //   }
  // ] = [{ id: '', todoItem: '' }];

  ngOnInit(): void {
    console.log(this.todoList);
  }

  // C-R-U-D:

  // Push the Values: on an event occurs
  addTodo(todo: string) {
    // console.log(todo);
    this.todoList.push({ id: this.todoList.length + 1, todoItem: todo });
    this.itemVal = '';
  }

  delete(todo: any) {
    this.todoList.splice(this.todoList.indexOf(todo), 1);
  }

  edit(editVal: any) {
    this.itemVal = editVal.todoItem;
    this.editedVal = editVal;
  }

  updateTodo(updateTodo: any) {
    this.editedVal.todoItem = updateTodo;
  }

  // delete, updating, reading
}
