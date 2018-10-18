import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  title = '';
  @Output() add = new EventEmitter();

  onSubmit() {
    this.add.emit( this.title );
  }

  ngOnInit() {
  }

}
