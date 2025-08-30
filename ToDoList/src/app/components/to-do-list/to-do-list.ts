import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './to-do-list.html',
  styleUrls: ['./to-do-list.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoList {
  tasks: { id: number, text: string }[] = [
    { id: 0, text: 'Buy a new gaming laptop', },
    { id: 1, text: 'Complete previous task', },
    { id: 2, text: 'Create some angular app', },
  ]

  delete(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
