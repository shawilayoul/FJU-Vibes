import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PlaylistService } from '../../playlist.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, HttpClientModule],
  providers: [PlaylistService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
 
  featuredPlaylists: any = [];
  trendingSongs: any =[];
  constructor(
    private playlistService: PlaylistService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.playlistService.getPlaylist().subscribe(
      (data: any) => {
        this.featuredPlaylists = data;
        this.cdr.detectChanges(); // Manually trigger change detection
      },
      (error: any) => {
        console.error('Error loading playlists:', error);
      }
    );
    this.playlistService.getTrendingTrack().subscribe(
      (data: any) => {
        this.trendingSongs = data;
        this.cdr.detectChanges(); // Manually trigger change detection
        console.log(this.trendingSongs);
      },
      (error: any) => {
        console.error('Error loading trending tracks:', error);
      }
    );
  }
}
