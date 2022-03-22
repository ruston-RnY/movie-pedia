import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @Input() compData: any;
  urlImage = `https://image.tmdb.org/t/p/`;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.compData);
  }

  navigate() {
    this.router.navigate(['/movie']);
  }
}
