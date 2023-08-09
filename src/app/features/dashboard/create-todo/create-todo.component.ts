import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ListService } from '../services/list.service';

@Component({
  selector: 'jv-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {

  titleControl = new FormControl('');

  list!: Todo[];

  constructor(private listService: ListService) {
  }

  save() {
    this.listService.create(this.titleControl.value!);
  }
}
