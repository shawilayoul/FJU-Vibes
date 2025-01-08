import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule to use ngFor

@Component({
  selector: 'app-playlist',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css'],
  imports: [RouterModule, CommonModule]
})
export class PlaylistComponent implements OnInit {

  playlists = [
    { id: 1, name: 'Chill Vibes' },
    { id: 2, name: 'Workout Playlist' },
    { id: 3, name: 'Top 100 Hits' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Fetch playlists dynamically from an API or service
  }
}
