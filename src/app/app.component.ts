import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './app-user/user.component';
import { ChildComponent } from './app-child/child.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent,
    ChildComponent,
    NgOptimizedImage,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isAppRunning = true;
  isEditable = true;
  title = 'SupaApp';
  version = 2;
  categories = ['Angular', 'React', 'Vue'];
  number: number = 0;
  onButtonClick = () => {
    this.isEditable = !this.isEditable;
  };
  onMouseOver = () => {
    alert('Mouse is over the username');
  };
  addNumber = (num: number) => {
    this.number += num;
  };

  imgalt = 'Angular Logo';
  imgsrc = '/favicon.ico';
}
