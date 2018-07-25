import { Injectable } from '@angular/core';
import { movie } from '../interfaces/movie.interface';

@Injectable()
export class MovieService {
  movies: Array<movie>;
  
  constructor() { }

  getMovies() {
    return this.movies;
  }

  getMovie(id:Number){
    let movieId = this.movies.findIndex(e=>e.id==id)
    return this.movies[movieId]
  }
}