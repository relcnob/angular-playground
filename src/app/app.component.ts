import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiCardComponent } from './ui-card/ui-card.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UiCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-playground';
}
