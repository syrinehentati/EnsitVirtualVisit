import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poster } from '../Model/Poster';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PosterService {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


  public getPosters(): Observable<Poster[]> {
    return this.http.get<Poster[]>(`${this.apiBaseUrl}/AffichesCRUD.php`);
  }

  public getPosterByid(id: Number): Observable<Poster> {
    return this.http.get<Poster>(`${this.apiBaseUrl}/AffichesCRUD.php/?id=${id}`);
  }

  public addPoster(poster: Poster): Observable<Poster> {
    return this.http.post<Poster>(`${this.apiBaseUrl}/AffichesCRUD.php`, poster);
  }

  public updateposter(id: Number,poster:Poster): Observable<Poster> {
    return this.http.put<Poster>(`${this.apiBaseUrl}/AffichesCRUD.php?id=${id}`, poster);
  }

  public deletePoster(id: Number): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/AffichesCRUD.php?id=${id}`);
  }

}
