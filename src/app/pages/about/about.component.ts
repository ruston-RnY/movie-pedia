import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  dataAbout = [
    {
      title: 'Our',
      subtitle: 'Project',
      desc: '<p>This project is a film information website from all over the world</p><p>Here visitors can get information on upcoming films, the latest films, popular films and others, this website was created by consuming public api <span>TMBD</span> movies so that you will always get updated information</p>',
      image: 'assets/image/home-cinema.png',
      position: 'left',
    },
    {
      title: 'Developer',
      subtitle: 'Profile',
      desc: '<p>Currently im work as a front end web developer at a start-up company.</p><p>My work includes the process of developing a company profile website and others, the technology used by using the angular javascript framework, rest api, html, css, sass, version control such as git and ensuring that the website created is responsive on all devices.</p><p>If you have a desire to create a responsive and user friendly website, or have questions about the front end of a website, you can contact me at the contact provided and lets work together.</p>',
      image: 'assets/image/profile.jpg',
      position: 'right',
    },
  ]

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

}
