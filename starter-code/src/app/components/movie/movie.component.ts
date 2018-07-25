import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: movie;
  constructor(private route: ActivatedRoute, private mS:MovieService) { }

  ngOnInit() {
    this.route.params
      .subscribe(params=>this.movie = this.mS.getMovie(Number(params['id'])))
  }

}
