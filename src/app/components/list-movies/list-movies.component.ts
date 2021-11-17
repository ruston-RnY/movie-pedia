import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  movies = [
    {
      image: 'https://image.tmdb.org/t/p/w185/ld7YB9vBRp1GM1DT3KmFWSmtBPB.jpg',
      title: 'The Addams Family 2'
    },
    {
      image: 'https://image.tmdb.org/t/p/w185/6AdXwFTRTAzggD2QUTt5B7JFGKL.jpg',
      title: 'The Eternals 2021'
    },
    {
      image: 'https://image.tmdb.org/t/p/w185/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg',
      title: 'Venom: Let There Be Carnage'
    },
    {
      image: 'https://image.tmdb.org/t/p/w185/1UkbPQspPbq1FPbFP4VV1ELCfSN.jpg',
      title: 'The Addams Family 2'
    },
    {
      image: 'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg',
      title: 'The Addams Family 2'
    },
    {
      image: 'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg',
      title: 'The Addams Family 2'
    },
    {
      image: 'https://image.tmdb.org/t/p/w185/6AdXwFTRTAzggD2QUTt5B7JFGKL.jpg',
      title: 'The Eternals 2021'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
