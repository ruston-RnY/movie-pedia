import { Component, Input, OnInit } from '@angular/core';
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

  urlImage = `https://image.tmdb.org/t/p/w185`;

  page = 1;
  lastPage = 6;
  api_key: string;

  constructor(
    private apiService: ApiService
  ) {

  }

  ngOnInit(): void {
    this.api_key = this.apiService.API_KEY;
  }

  loadMore(item) {
    if (this.page < this.lastPage) {
      this.page++;
      this.apiService.getDataApi(`${item}?${this.api_key}&page=${this.page}`)
        .pipe(takeUntil(this.unSubs))
        .subscribe(res => {
          this.compData[0] = [...this.compData[0], ...res.results];
          console.log(this.compData[0]);
        })
    }
    else {
      console.log("disable");
    }
  }
}
