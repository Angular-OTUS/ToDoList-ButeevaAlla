import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '../../../shared-sripts/interfaces';

@Component({
  selector: 'app-to-do-list-item',
  imports: [],
  templateUrl: './to-do-list-item.html',
  styleUrls: ['./to-do-list-item.less', '../../../shared-styles/mixins.less', '../../../shared-styles/buttons.less']
})
export class ToDoListItem {
  @Input() task?: ITask;
  @Output() newItemEvent = new EventEmitter<number>();

  delete(id: number): void {
    this.newItemEvent.emit(id);
  }
}