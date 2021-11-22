import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  private readonly unSubs = new Subject<void>();

  filter = [
    {
      title: 'Now Playing',
      value: 'now_playing'
    },
    {
      title: 'Upcoming',
      value: 'upcoming'
    },
    {
      title: 'Popular',
      value: 'popular'
    },
  ];

  api_key: string;
  dataMovies: any;
  type: string;
  page = 1;
  lastPage = 6;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.api_key = this.apiService.API_KEY;
    this.nowPlaying();
    this.type = 'now playing';
  }

  nowPlaying() {
    this.apiService.getDataApi(`now_playing?${this.api_key}`)
      .pipe(takeUntil(this.unSubs))
      .subscribe(res => {
        this.dataMovies = res.results;
      })
  }

  getMovies(item) {
    this.apiService.getDataApi(`${item.value}?${this.api_key}&language=en-US&page=1`)
      .pipe(takeUntil(this.unSubs))
      .subscribe(res => {
        this.dataMovies = res.results;
      })

    this.type = item.title;
  }

  loadMore() {
    if (this.page < this.lastPage) {
      this.page++;
      // this.apiService.getDataApi(`${item.value}?${this.api_key}&page=${this.page}`)
      //   .pipe(takeUntil(this.unSubs))
      //   .subscribe(res => {
      //     this.dataMovies = [...this.dataMovies, ...res.results];
      //     console.log(this.dataMovies);
      //   })
    }
    else {
      console.log("disable");
    }
  }
}
