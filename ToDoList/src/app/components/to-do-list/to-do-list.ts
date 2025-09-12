import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ITask } from '../../shared-sripts/interfaces';
import { ToDoListItem } from './to-do-list-item/to-do-list-item';

@Component({
  selector: 'app-to-do-list',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, ToDoListItem],
  templateUrl: './to-do-list.html',
  styleUrls: ['./to-do-list.less', '../../shared-styles/mixins.less', '../../shared-styles/buttons.less'],
  changeDetection: ChangeDetectionStrategy.Default,
})

export class ToDoList implements OnInit {
  tasks: ITask[] = [
    { id: 0, text: 'Buy a new gaming laptop', },
    { id: 1, text: 'Complete previous task', },
    { id: 2, text: 'Create some angular app', },
  ]
  newTask: string = '';
  isLoading: boolean = true;

  delete(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  add(newTask: string): void {
    const nextId: number = Math.max(...this.tasks.map(task => task.id)) + 1;
    this.tasks.push({ id: nextId, text: newTask, });
  }

  ngOnInit() {
    console.log(this.isLoading);
    setTimeout(() => {
      this.isLoading = false;
      console.log(this.isLoading);
    }, 500);
  }
}
