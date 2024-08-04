import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `<p>Username: {{ username }}</p>
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
      <label for="username"
        >Username:
        <input type="text" formControlName="name" />
      </label>
      <label for="email"
        >Email:
        <input type="email" formControlName="email" />
      </label>
      <button type="submit" [disabled]="!profileForm.valid">Submit</button>
    </form>
    <div>
      <h2>Profile</h2>
      <p>Name: {{ profileForm.value.name }}</p>
      <p>Email: {{ profileForm.value.email }}</p>
    </div> `,
  imports: [ReactiveFormsModule],
})
export class UserComponent {
  @Input() username = 'JohnDoe';
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  handleSubmit() {
    console.log(this.profileForm.value);
  }
}
