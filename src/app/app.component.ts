import { ChangeDetectorRef, Component } from '@angular/core';
import * as AOS from 'aos';
import { ApiService } from './shared/service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-pedia';
  public loading = true;

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef,
  ) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      AOS.init({
        once: true
      });
    }, 1000);


    this.apiService.isLoading.subscribe(data => {
      this.loading = data;
    });
    this.cdr.detectChanges();
  }
}
