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

  list : List;
  itemName : string = '';

  constructor(private todoService: TodoService, private route : ActivatedRoute) { 
    const id = this.route.snapshot.paramMap.get('listId');

    this.list = todoService.getList(id);

  }

  ngOnInit() {
  }

  AddItem(){
    if(this.itemName.length === 0){
      return;
    }

    const item = new ListItem(this.itemName);
    this.list.items.push(item);

    this.itemName = '';

    this.todoService.saveStorage();
  }

}
