import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data = [
    {
      image: 'https://image.tmdb.org/t/p/w185/ld7YB9vBRp1GM1DT3KmFWSmtBPB.jpg'
    },
    {
      image: 'https://image.tmdb.org/t/p/w185/6AdXwFTRTAzggD2QUTt5B7JFGKL.jpg'
    },
    {
      image: 'https://image.tmdb.org/t/p/w185/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg'
    },
    {
      image: 'https://image.tmdb.org/t/p/w185/1UkbPQspPbq1FPbFP4VV1ELCfSN.jpg'
    },
    {
      image: 'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg'
    },
  ]

  slideConfig = {
    'slidesToShow': 5,
    'slidesToScroll': 1,
    'autoplay': true,
    'arrows': false,
    'infinite': true,
    'responsive': [
      {
        'breakpoint': 1050,
        'settings': {
          'slidesToShow': 4
        }
      },
      {
        'breakpoint': 800,
        'settings': {
          'slidesToShow': 3
        }
      },
      {
        'breakpoint': 576,
        'settings': {
          'slidesToShow': 1,
          'centerMode': true,
          'centerPadding': '60px',
        }
      },
    ]
  };

  constructor() { }

  ngOnInit(): void {

  }

}
