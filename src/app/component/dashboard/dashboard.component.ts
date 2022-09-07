import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  // our Todo Items List:
  todoList!: object[];
  itemVal: string = 'null';

  // todoList: [
  //   {
  //     id: string;
  //     todoItem: string;
  //   }
  // ] = [{ id: '', todoItem: '' }];

  ngOnInit(): void {}

  // C-R-U-D:

  // Push the Values: on an event occurs
  i = 0;
  addTodo(todo: string) {
    this.todoList.push({ id: this.i++, todoItem: todo });
    console.log(this.todoList);
  }

  // delete, updating, reading
}
