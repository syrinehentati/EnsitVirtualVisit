import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../Model/Player';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.apiBaseUrl}/players`);
  }

  public getPlayerByEmail(Email: string): Observable<Player> {
    return this.http.get<Player>(`${this.apiBaseUrl}/players/${Email}`);
  }

  public addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(`${this.apiBaseUrl}/players`, player);
  }

  public updatePlayer(player: Player): Observable<Player> {
    return this.http.put<Player>(`${this.apiBaseUrl}/players/${player.playerEmail}`, player);
  }

  public deletePlayer(Email: string): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/players/${Email}`);
  }
}
