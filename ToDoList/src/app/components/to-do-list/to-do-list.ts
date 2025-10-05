import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { timer } from 'rxjs';

import { INewTask, ITask, IButton } from '../../shared-sripts/interfaces';
import { ToDoListItem } from './to-do-list-item/to-do-list-item';
import { ButtonComponent } from '../button-component/button-component';

@Component({
  selector: 'app-to-do-list',
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ToDoListItem,
    ButtonComponent,
  ],
  templateUrl: './to-do-list.html',
  styleUrls: ['./to-do-list.less', '../../shared-styles/mixins.less'],
})
export class ToDoList implements OnInit {
  public tasks: ITask[] = [
    { id: 0, text: 'Buy a new gaming laptop', description: '' },
    { id: 1, text: 'Complete previous task', description: '' },
    { id: 2, text: 'Create some angular app', description: '' },
  ];
  public newTask: INewTask = { text: '', description: '' };
  public isLoading: WritableSignal<boolean> = signal<boolean>(true);
  public BtnParams: IButton = {
    title: 'Add task',
    class: 'button button_add td-form__button',
  };

  public delete(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  public add(newTask: INewTask): void {
    this.tasks.push({
      id: Math.max(...this.tasks.map((task) => task.id)) + 1,
      text: newTask.text,
      description: newTask.description,
    });
  }

  public ngOnInit(): void {
    timer(500).subscribe(() => {
      this.isLoading.set(false);
    });
  }
}
