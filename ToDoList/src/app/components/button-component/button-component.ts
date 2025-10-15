import { Component, Input } from '@angular/core';
import { IButton } from '../../shared-sripts/interfaces';

@Component({
  selector: 'app-button-component',
  imports: [],
  templateUrl: './button-component.html',
  styleUrl: './button-component.less',
})
export class ButtonComponent {
  @Input() btnParams?: IButton;
}
