import { Injectable } from '@angular/core';
import { ITask, INewTask } from '../shared-sripts/interfaces';
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks: ITask[] = [
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

  public getTasks(): ITask[] {
    return this.tasks;
  }

  public addTask(newTask: INewTask): void {
    this.tasks.push({
      id: Math.max(...this.tasks.map((task) => task.id)) + 1,
      text: newTask.text,
      description: newTask.description,
    });
  }

  public deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
