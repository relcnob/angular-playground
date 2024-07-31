import { Component, Input } from '@angular/core';
import { PillComponent } from '../pill/pill.component';

@Component({
  selector: 'ui-card',
  standalone: true,
  imports: [PillComponent],
  templateUrl: './ui-card.component.html',
  styleUrl: './ui-card.component.css',
})
export class UiCardComponent {
  @Input() element = {
    name: 'Angular',
    status: 'inactive',
    description:
      'Angular is a platform for building mobile and desktop web applications.',
    tags: [
      { id: 1, name: 'Angular' },
      { id: 2, name: 'TypeScript' },
    ],
  };

  updateStatus() {
    this.element.status =
      this.element.status === 'active' ? 'inactive' : 'active';
  }
}
