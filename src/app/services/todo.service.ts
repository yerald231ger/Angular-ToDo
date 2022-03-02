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

  creatList(title: string): number {
    const nuevaLista = new List(title);
    this.lists.push(nuevaLista);
    this.saveStorage();

    return nuevaLista.id;
  }

  getList(id: number | string) {
    id = Number(id);
    return this.lists.find((l) => l.id === id);
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.lists));
  }

  deleteList(list: List) {
    this.lists = this.lists.filter((l) => l.id !== list.id);
    this.saveStorage();
  }

  getStorage() {
    if (localStorage.getItem('data')) {
      this.lists = JSON.parse(localStorage.getItem('data'));
    }
  }
}
