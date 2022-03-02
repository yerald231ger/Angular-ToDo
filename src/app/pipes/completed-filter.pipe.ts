import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list.model';

@Pipe({
  name: 'completedFilter'
})
export class CompletedFilterPipe implements PipeTransform {

  transform(lists: List[], completed: boolean = true): List[] {
    return lists.filter(list => list.finished === completed);
  }

}
