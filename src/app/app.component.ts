import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-pedia';

  ngOnInit(): void {
    setTimeout(() => {
      AOS.init({
        once: true
      });
    }, 1000);
  }
}
