import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {
  private readonly unSubs = new Subject<void>();
  @Input() compData: any;
  @ViewChild('myModal', { static: false }) myModal: ModalDirective;

  urlImage = `https://image.tmdb.org/t/p/w185`;
  page = 1;
  lastPage = 6;
  api_key: string;
  category: string;
  param: string;
  selectedMovie: any;
  producer: any;
  actor: any;
  keyword: string;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(res => {
      this.param = res.type;
      if (res.type) {
        this.category = res.type
      } else {
        this.category = 'now_playing'
      }
    })
  }

  ngOnInit(): void {
    this.api_key = this.apiService.API_KEY;
    if (this.param) {
      this.getMovies();
    }

    this.getDataSearch()
  }

  getMovies() {
    this.activatedRoute.params.subscribe(res => {
      this.apiService.getDataApi(`${res.type}?${this.api_key}&language=en-US&page=1`)
        .pipe(takeUntil(this.unSubs))
        .subscribe(res => {
          this.compData = res.results;
        })
    })
  }

  loadMore() {
    if (this.page < this.lastPage) {
      this.page++;
      this.apiService.getDataApi(`${this.category}?${this.api_key}&page=${this.page}`)
        .pipe(takeUntil(this.unSubs))
        .subscribe(res => {
          this.compData = [...this.compData, ...res.results];
        })
    }
    else {
      console.log("disable");
    }
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

  closeModal() {
    this.myModal.hide()
  }

  getDataSearch() {
    this.activatedRoute.params.subscribe(res => {
      this.keyword = res.keyword;
      console.log(this.keyword);

      this.apiService.getDataSearch(`search/movie?${this.api_key}&language=en-US&query=${this.keyword}`)
        .pipe(takeUntil(this.unSubs))
        .subscribe(res => {
          this.compData = res.results;
        })
    })
  }
}
