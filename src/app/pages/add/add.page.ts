import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { List } from '../../models/list.model';
import { ListItem } from '../../models/list-item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list: List;
  itemName: '';

  constructor(private todoService: TodoService, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('listId');

    this.list = todoService.getList(id);

  }

  ngOnInit() {
  }

  addItem() {
    if (this.itemName.length === 0) {
      return;
    }

    const item = new ListItem(this.itemName);
    this.list.items.push(item);

    this.itemName = '';

    this.todoService.saveStorage();
  }

  changeCheck(itme: ListItem) {
    const pendents = this.list.items.filter(id => !id.complated).length;

    if (pendents === 0) {
      this.list.endAt = new Date();
      this.list.finished = true;
    } else {
      this.list.endAt = null;
      this.list.finished = false;
    }

    this.todoService.saveStorage();
  }

  delete(index: number) {
    this.list.items.splice(index, 1);
    this.todoService.saveStorage();
  }

}
