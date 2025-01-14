import { Component, OnInit, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule to use ngFor
import { PlaylistService } from '../../playlist.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-playlist',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css'],
  imports: [RouterModule, CommonModule, HttpClientModule],
  providers: [PlaylistService],

})
export class PlaylistComponent implements OnInit {
  playlists: any = [];

  constructor(private playlistService: PlaylistService) {}
  ngOnInit(): void {
    this.playlistService.getPlaylist().subscribe(
      (data: any) => {
        this.playlists = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
 /* navigateToPlaylist(playlistId: string): void {
    this.route.navigate([`/playlist/${playlistId}`]); // Example navigation
  }*/
}
