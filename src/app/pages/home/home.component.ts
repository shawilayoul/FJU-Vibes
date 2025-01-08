import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule],

})
export class HomeComponent implements OnInit {

  featuredPlaylists = [
    { 
      title: 'Chill Vibes', 
      description: 'Relax and unwind with these mellow tunes.',
      imageUrl: 'assets/images/playlist1.jpg' 
    },
    { 
      title: 'Top Hits', 
      description: 'The most popular tracks right now.',
      imageUrl: 'assets/images/playlist2.jpg' 
    },
    { 
      title: 'Workout Mix', 
      description: 'Get energized with this high tempo playlist.',
      imageUrl: 'assets/images/playlist3.jpg' 
    }
  ];

  trendingSongs = [
    { 
      title: 'Blinding Lights', 
      artist: 'The Weeknd', 
      coverImage: 'assets/images/song1.jpg' 
    },
    { 
      title: 'Save Your Tears', 
      artist: 'The Weeknd', 
      coverImage: 'assets/images/song2.jpg' 
    },
    { 
      title: 'Levitating', 
      artist: 'Dua Lipa', 
      coverImage: 'assets/images/song3.jpg' 
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
