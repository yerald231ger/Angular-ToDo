import { Injectable } from '@angular/core';

import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  lists: List[] = [];

  constructor() {
     this.getStorage();
  }

  creatList(title: string) {
    const nuevaLista = new List(title);

    this.lists.push(nuevaLista);

    this.saveStorage();
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.lists));
  }

  getStorage()   {

    if(localStorage.getItem('data')){
      this.lists = JSON.parse(localStorage.getItem('data'));

    }
  }
}
