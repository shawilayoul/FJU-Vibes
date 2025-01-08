import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlaylistComponent } from './pages/playlists/playlists.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'playlist',
    component: PlaylistComponent
  },
];
