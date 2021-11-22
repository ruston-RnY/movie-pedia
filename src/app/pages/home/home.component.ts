import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private readonly unSubs = new Subject<void>();
  @ViewChild('myModal', { static: false }) myModal: ModalDirective;
  modalRef?: BsModalRef;
  movies: any;
  urlImage = `https://image.tmdb.org/t/p/w185`;
  api_key: any;
  selectedMovie: any;
  producer: any;
  actor: any;

  thumb = [
    {
      title: 'Easy',
      subtitle: 'Access',
      desc: '<p>Easy to find accurate and fast movie information, you can get the best info anywhere and anytime</p><p>With the convenience you get, free time with family becomes more quality, a good spectacle can increase concentration and provide new enthusiasm and inspiration in living life</p>',
      image: 'assets/image/home-cinema.png',
      position: 'left',
    },
  ]

  slideConfig = {
    'slidesToShow': 5,
    'slidesToScroll': 1,
    'autoplay': true,
    'arrows': true,
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
          'arrows': false,
          'centerMode': true,
          'centerPadding': '60px',
        }
      },
    ]
  };

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.api_key = this.apiService.API_KEY;
    this.getData();
  }

  private getData() {
    this.apiService.getDataApi(`upcoming?${this.api_key}&language=en-US&page=1`)
      .pipe(takeUntil(this.unSubs))
      .subscribe(res => {
        this.movies = res.results;
      })
  }

  closeModal() {
    this.myModal.hide()
  }

  getDetail(id) {
    this.apiService.getDataApi(`${id}?&language=en-US&${this.api_key}`)
      .pipe(takeUntil(this.unSubs))
      .subscribe(res => {
        this.selectedMovie = res;
        this.getCrew(id);

        this.myModal.show();
      })
  }

  getCrew(id) {
    this.apiService.getDataApi(`${id}/credits?&language=en-US&${this.api_key}`)
      .pipe(takeUntil(this.unSubs))
      .subscribe(res => {
        const filter = res.crew.filter(a => a.job == 'Director');
        this.producer = filter[0];
        this.actor = res.cast;
      })
  }
}
