import { Component } from '@angular/core';

import { Todo } from './todo';
import { todos } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2DO';
  todos: Todo[] = todos;

  create( title ) {
    const todo = new Todo( title );
    this.todos.push( todo );
  }

}
