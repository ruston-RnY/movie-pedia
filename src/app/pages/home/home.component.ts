import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
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

  constructor(
    private apiService: ApiService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    const api_key = this.apiService.API_KEY;

    this.apiService.getDataApi(`upcoming?${api_key}&language=en-US&page=1`)
      .pipe(takeUntil(this.unSubs))
      .subscribe(res => {
        console.log(res);

      })
  }

  openModal() {
    this.myModal.show();
  }

  closeModal() {
    // this.location.back();
    this.myModal.hide()
  }

}
