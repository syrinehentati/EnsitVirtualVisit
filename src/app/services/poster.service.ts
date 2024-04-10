import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poster } from './Model/Poster';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PosterStandService {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


  public getPosters(): Observable<Poster[]> {
    return this.http.get<Poster[]>(`${this.apiBaseUrl}/posters`);
  }

  public getPosterByURL(URL: string): Observable<Poster> {
    return this.http.get<Poster>(`${this.apiBaseUrl}/posters/${URL}`);
  }

  public addPoster(poster: Poster): Observable<Poster> {
    return this.http.post<Poster>(`${this.apiBaseUrl}/posters`, poster);
  }

  public updatePoster(poster: Poster): Observable<Poster> {
    return this.http.put<Poster>(`${this.apiBaseUrl}/posters/${poster. posterURL}`, poster);
  }

  public deletePoster(URL: string): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/posters/${URL}`);
  }

}
