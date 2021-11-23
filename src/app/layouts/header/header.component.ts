import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('header') head: ElementRef;
  openHeader: boolean = false;
  status: boolean = false;

  menus = [
    {
      name: 'home',
      url: '/home'
    },
    {
      name: 'movies',
      url: '/movie'
    },
    {
      name: 'about',
      url: '/about'
    },
  ]

  constructor(
    private renderer: Renderer2,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    let scroll = window.pageYOffset;
    if (scroll <= 85) {
      this.renderer.removeClass(this.head.nativeElement, 'fix-top');
    } else if (scroll > 95) {
      this.renderer.addClass(this.head.nativeElement, 'fix-top');
    }
  }

  onOpenHeader() {
    this.openHeader = !this.openHeader;
    if (this.openHeader == true) {
      this.renderer.addClass(document.documentElement, 'overflow-hidden');
    } else {
      this.onCloseHeader();
    }
  }

  onCloseHeader() {
    this.openHeader = false;
    this.renderer.removeClass(document.documentElement, 'overflow-hidden');
  }

  openSearchBar() {
    this.status = !this.status;
  }

  search(value) {
    const searchKeyword = value.target.value;
    this.router.navigate(['/movie/search/', searchKeyword]).then(() => window.location.reload())
  }
}
