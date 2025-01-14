import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private url = 'https://musicserver-uluy.onrender.com/playlist';

  constructor(private http: HttpClient) { }

  getPlaylist(): Observable<any> {
    return this.http.get(this.url);
  }
}
