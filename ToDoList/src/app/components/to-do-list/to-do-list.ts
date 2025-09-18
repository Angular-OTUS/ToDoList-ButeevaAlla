import { Component, ChangeDetectorRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { ITask } from '../../shared-sripts/interfaces';
import { ToDoListItem } from './to-do-list-item/to-do-list-item';

@Component({
  selector: 'app-to-do-list',
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ToDoListItem
  ],
  templateUrl: './to-do-list.html',
  styleUrls: [
    './to-do-list.less',
    '../../shared-styles/mixins.less',
    '../../shared-styles/buttons.less'
  ],
})

export class ToDoList {
  public tasks: ITask[] = [
    { id: 0, text: 'Buy a new gaming laptop', },
    { id: 1, text: 'Complete previous task', },
    { id: 2, text: 'Create some angular app', },
  ]
  public newTask: string = '';
  public isLoading: boolean = true;

  constructor(private cdr: ChangeDetectorRef) {
    this.changeVisiable();
  }

  public delete(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  public add(newTask: string): void {
    this.tasks.push(
      { 
        id: Math.max(...this.tasks.map(task => task.id)) + 1,
        text: newTask, 
      }
    );
  }

  private changeVisiable(): void {
        setTimeout(() => {
      this.isLoading = false;
      this.cdr.detectChanges();
    }, 1000);
  }
}
