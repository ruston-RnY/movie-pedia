import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-thumb',
  templateUrl: './section-thumb.component.html',
  styleUrls: ['./section-thumb.component.scss']
})
export class SectionThumbComponent implements OnInit {
  @Input() compData: any;

  currentPage: string;

  constructor(
    private router: Router
  ) {
    this.currentPage = this.router.url
  }

  ngOnInit(): void {
  }

}
