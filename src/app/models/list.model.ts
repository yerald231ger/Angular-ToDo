import { ListItem } from './list-item.model';
export class List {
  id: number;
  title: string;
  createdAt: Date;
  endAt: Date;
  finished: boolean;
  items: ListItem[];

  constructor(title: string) {
    this.title = title;
    this.createdAt = new Date();
    this.finished = false;
    this.items = [];
    this.id = new Date().getDate();
  }
}
