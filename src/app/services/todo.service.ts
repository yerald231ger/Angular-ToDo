import { Injectable } from '@angular/core';

import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  lists: List[] = [];  

  constructor() { 
    const lista1 = new List('Recolectar piedras del infinito');
    const lista2 = new List('Heores a desaparecer');
    this.lists.push(lista1, lista2);

        
  }
}
