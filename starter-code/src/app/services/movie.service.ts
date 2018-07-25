import { Injectable } from '@angular/core';
import { movie } from '../interfaces/movie.interface';
import { movieList } from 'sample-movies';

@Injectable()
export class MovieService {
  movies: Array<movie> = [];
  
  constructor() {
    this.movies = movieList
  }

  getMovies() {
    return this.movies;
  }

  getMovie(id:Number){
    let movieId = this.movies.findIndex(e=>e.id==id)
    return this.movies[movieId]
  }
}