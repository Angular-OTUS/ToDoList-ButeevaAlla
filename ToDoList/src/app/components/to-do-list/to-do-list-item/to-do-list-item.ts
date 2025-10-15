import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ITask, IButton } from '../../../shared-sripts/interfaces';
import { ButtonComponent } from '../../button-component/button-component';
import { Tooltip } from '../../../directives/tooltip';

@Component({
  selector: 'app-to-do-list-item',
  imports: [ButtonComponent, Tooltip],
  templateUrl: './to-do-list-item.html',
  styleUrls: ['./to-do-list-item.less', '../../../shared-styles/mixins.less'],
})
export class ToDoListItem {
  @Input() task?: ITask;
  @Output() newItemEvent = new EventEmitter<number>();
  BtnParams: IButton = { title: 'Delete', class: 'button_delete' };

  delete(id: number): void {
    this.newItemEvent.emit(id);
  }
}
