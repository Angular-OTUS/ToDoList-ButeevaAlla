import { Component, Input, Output, EventEmitter, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ITask, IButton } from '../../../shared-sripts/interfaces';
import { ButtonComponent } from '../../button-component/button-component';
import { Tooltip } from '../../../directives/tooltip';

@Component({
  selector: 'app-to-do-list-item',
  imports: [ButtonComponent, Tooltip, FormsModule],
  templateUrl: './to-do-list-item.html',
  styleUrls: ['./to-do-list-item.less', '../../../shared-styles/mixins.less'],
})
export class ToDoListItem {
  @Input() task?: ITask;
  @Input() selectedItemId: number | null = null;
  @Output() newItemEvent = new EventEmitter<number>();
  btnParams: IButton = { title: 'Delete', class: 'button_delete' };
  public editMode: WritableSignal<boolean> = signal<boolean>(false);

  delete(id: number): void {
    this.newItemEvent.emit(id);
  }

  allowEditing(): void {
    this.editMode.set(true);
  }

  disallowEditing(): void {
    this.editMode.set(false);
  }
}
