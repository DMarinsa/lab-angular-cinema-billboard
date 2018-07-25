import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Array<Object>
  
  constructor(public mS: MovieService) { }
  
  ngOnInit() {
    this.movies = this.mS.getMovies();
  }

}
