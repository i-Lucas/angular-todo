import { Component, OnInit } from '@angular/core';

import { TodoService } from 'src/app/shared/services/todos.service';
import { ListService } from '../services/list.service';

@Component({
  selector: 'jv-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  list!: Todo[];

  constructor(private todosService: TodoService,
              private listService: ListService) {
  }

  ngOnInit() {
    this.listService.list$
      .subscribe(list => this.list = list);
  }

  markAsDone(id: number) {
    this.listService.toggleDone(id);
  }

  onDelete(id: number) {
    this.listService.remove(id);
  }

  loadMore() {
    this.listService.page++;
    this.listService.getList(this.listService.page);
  }
}
