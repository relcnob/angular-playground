import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './app-user/user.component';
import { ChildComponent } from './app-child/child.component';
import { NgOptimizedImage } from '@angular/common';
import { UserService } from './services/user.service';
import { UpperCasePipe, DatePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent,
    ChildComponent,
    NgOptimizedImage,
    RouterLink,
    UpperCasePipe,
    DatePipe,
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

  display = '';
  date = new Date();
  constructor(private userService: UserService) {
    this.display = this.userService.getUsers().join(', ');
  }
}
