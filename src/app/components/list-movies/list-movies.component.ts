import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {
  @Input() compData: any;
  urlImage = `https://image.tmdb.org/t/p/w185`;

  constructor() {

  }

  ngOnInit(): void {

  }

}
