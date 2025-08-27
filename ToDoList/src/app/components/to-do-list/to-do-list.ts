import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-to-do-list',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './to-do-list.html',
  styleUrls: ['./to-do-list.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoList {
  tasks: string[] = [
    'Buy a new gaming laptop',
    'Complete previous task',
    'Create some angular app'
  ]
}
