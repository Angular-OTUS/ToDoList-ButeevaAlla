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
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, ToDoListItem, ButtonComponent],
  templateUrl: './to-do-list.html',
  styleUrls: ['./to-do-list.less', '../../shared-styles/mixins.less'],
})
export class ToDoList implements OnInit {
  public tasks: ITask[] = [
    {
      id: 0,
      text: 'Buy a new gaming laptop',
      description:
        'Quos ducimus officiis dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eligendi. ',
    },
    {
      id: 1,
      text: 'Complete previous task',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, eligendi.',
    },
    {
      id: 2,
      text: 'Create some angular app',
      description: 'Autem ratione culpa nulla ipsam nihil asperiores natus deleniti doloribus dolorem quibusdam.',
    },
  ];
  public newTask: INewTask = { text: '', description: '' };
  public selectedItemId: number | null = null;
  public isLoading: WritableSignal<boolean> = signal<boolean>(true);
  public BtnParams: IButton = {
    title: 'Add task',
    class: 'button button_add td-form__button',
  };

  public delete(id: number): void {
    this.selectedItemId = null;
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  public selectTask(id: number): void {
    this.selectedItemId = id;
  }

  public add(newTask: INewTask): void {
    this.selectedItemId = null;
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
