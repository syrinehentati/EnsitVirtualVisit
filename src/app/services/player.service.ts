import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { player } from '../Model/Player';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class playerService {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getplayers(): Observable<player[]> {
    return this.http.get<player[]>(`${this.apiBaseUrl}/JoueurCRUD.php`);
  }

  public getplayerByEmail(id: string): Observable<player> {
    return this.http.get<player>(`${this.apiBaseUrl}/JoueurCRUD.php?id=${id}`);
  }

  public addplayer(player: player): Observable<player> {
    return this.http.post<player>(`${this.apiBaseUrl}/JoueurCRUD.php`, player);
  }

  public updateplayer(id: string,player: player): Observable<player> {
    return this.http.put<player>(`${this.apiBaseUrl}/JoueurCRUD.php?id=${id}`, player);
  }

  public deleteplayer(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/players/${id}`);
  }
}
