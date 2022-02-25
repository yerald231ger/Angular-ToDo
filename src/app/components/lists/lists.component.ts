import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { List } from 'src/app/models/list.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input() finished = true;

  constructor(
    public todoService: TodoService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  selectedList(list: List) {

    if (this.finished) {
      this.router.navigateByUrl(`/tabs/tab2/add/${list.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/add/${list.id}`);
    }
  }

  deleteList(list: List){
    this.todoService.deleteList(list);
  }

  ngOnInit(): void { }
}
