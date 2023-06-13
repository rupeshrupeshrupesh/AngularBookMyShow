import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {

  movies: any[] = []; // Add your movie data here

  p: number = 1; // Current page

}
