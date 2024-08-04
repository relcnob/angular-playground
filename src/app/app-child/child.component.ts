import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `<button (click)="onClick()">ADD +1</button>`,
})
export class ChildComponent {
  @Output() incrementer = new EventEmitter<number>();
  onClick() {
    this.incrementer.emit(1);
  }
}
