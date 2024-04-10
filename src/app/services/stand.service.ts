import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stand } from '../Model/Stand';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PosterStandService {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  
  public getStands(): Observable<Stand[]> {
    return this.http.get<Stand[]>(`${this.apiBaseUrl}/stands`);
  }

  public getStandById( URL: string): Observable<Stand> {
    return this.http.get<Stand>(`${this.apiBaseUrl}/stands/${URL}`);
  }

  public addStand(stand: Stand): Observable<Stand> {
    return this.http.post<Stand>(`${this.apiBaseUrl}/stands`, stand);
  }

  public updateStand(stand: Stand): Observable<Stand> {
    return this.http.put<Stand>(`${this.apiBaseUrl}/stands/${stand.standURL}`, stand);
  }

  public deleteStand(URL: string): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/stands/${URL}`);
  }
}
