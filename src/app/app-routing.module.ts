import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

/* Routing Options */
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  // anchorScrolling: 'enabled',
  // scrollOffset: [0, 100]
  // preloadingStrategy: PreloadAllModules
};

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'movie',
    loadChildren: () => import('./pages/movie/movie.module').then(m => m.MovieModule)
  },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
