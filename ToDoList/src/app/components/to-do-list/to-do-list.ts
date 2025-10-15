import { Component, OnInit, signal, WritableSignal, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { timer } from 'rxjs';

import { INewTask, ITask, IButton } from '../../shared-sripts/interfaces';
import { TasksService } from '../../services/tasks';
import { ToDoListItem } from './to-do-list-item/to-do-list-item';
import { ButtonComponent } from '../button-component/button-component';
import { Tooltip } from '../../directives/tooltip';

@Component({
  selector: 'app-to-do-list',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, ToDoListItem, ButtonComponent, Tooltip],
  providers: [TasksService],
  templateUrl: './to-do-list.html',
  styleUrls: ['./to-do-list.less', '../../shared-styles/mixins.less'],
})
export class ToDoList implements OnInit {
  private tasksService: TasksService = inject(TasksService);
  public tasks = this.tasksService.getTasks();
  public newTask: INewTask = { text: '', description: '' };
  public selectedItemId: number | null = null;
  public isLoading: WritableSignal<boolean> = signal<boolean>(true);
  public btnParams: IButton = {
    title: 'Add task',
    class: 'button button_add',
  };

  public delete(id: number): void {
    this.selectedItemId = null;
    this.tasksService.deleteTask(id);
    this.tasks = this.tasksService.getTasks();
  }

  public selectTask(id: number): ITask | undefined {
    this.selectedItemId = id;
    return this.tasks.find((task) => task.id === this.selectedItemId);
  }

  public add(newTask: INewTask): void {
    this.selectedItemId = null;
    this.tasksService.addTask(newTask);
  }

  public ngOnInit(): void {
    timer(500).subscribe(() => {
      this.isLoading.set(false);
    });
  }
}
