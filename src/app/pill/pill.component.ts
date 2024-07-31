import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-pill',
  standalone: true,
  imports: [],
  templateUrl: './pill.component.html',
  styleUrl: './pill.component.css',
})
export class PillComponent {
  @Input() name = '';
}
