import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type Joke = {
  category: string;
  type: string;
  setup?: string;
  delivery?: string;
  joke?: string;
};
@Component({
  selector: 'app-test-path',
  standalone: true,
  imports: [],
  templateUrl: './test-path.component.html',
  styleUrl: './test-path.component.css',
})
export class TestPathComponent {
  jokes: Joke[] = [];
  isLoading = true;
  constructor(private http: HttpClient) {
    this.http
      .get(
        'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=5'
      )
      .subscribe((data: any) => {
        console.log(data);
        this.jokes = data.jokes;
        this.isLoading = false;
      });
  }
}
