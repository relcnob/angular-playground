import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UiCardComponent } from './ui-card/ui-card.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UiCardComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-playground';
  elementArray = [
    {
      id: 1,
      name: 'Something else',
      status: 'active',
      description:
        'Angular is a platform for building mobile and desktop web applications.',
      tags: [
        { id: 1, name: 'Tag' },
        { id: 2, name: 'TypeScript' },
        { id: 2, name: 'HTML' },
      ],
    },
    {
      id: 2,
      name: 'Angular',
      status: 'inactive',
      description: 'Some other text with no sense',
      tags: [
        { id: 1, name: 'Angular' },
        { id: 2, name: 'TypeScript' },
        { id: 2, name: 'CSS' },
        { id: 2, name: 'JS' },
      ],
    },
    {
      id: 3,
      name: 'Another thingy',
      status: 'inactive',
      description: 'Some other text with no sense and no meaning',
      tags: [{ id: 1, name: 'Angular' }],
    },
  ];
}
