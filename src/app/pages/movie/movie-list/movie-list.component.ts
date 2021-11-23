import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
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
  type: any;
  page = 1;
  lastPage = 6;
  category: any;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.apiService.isLoading.next(true);
    this.activatedRoute.params.subscribe(res => {
      if (res.type) {
        this.category = res.type
      }
    })
  }

  ngOnInit(): void {
    this.api_key = this.apiService.API_KEY;
    this.nowPlaying();
  }

  nowPlaying() {
    this.apiService.getDataApi(`now_playing?${this.api_key}`)
      .pipe(takeUntil(this.unSubs))
      .subscribe(res => {
        this.dataMovies = res.results;
        setTimeout(() => {
          this.apiService.isLoading.next(false);
        }, 900)
      })
  }

  getMovies(item) {
    this.router.navigate(['/movie/', item]).then(() => window.location.reload())
  }

  search(value) {
    const searchKeyword = value.target.value;
    this.router.navigate(['/movie/search/', searchKeyword]).then(() => window.location.reload())
  }

}
