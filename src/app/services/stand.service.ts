import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stand } from '../Model/Stand';
import { environment } from '../../environments/environment';
import { NumberValueAccessor } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StandService {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  
  public getStands(): Observable<Stand[]> {
    return this.http.get<Stand[]>(`${this.apiBaseUrl}/StandCRUD.php`);
  }

  public getStandById( id:Number): Observable<Stand> {
    return this.http.get<Stand>(`${this.apiBaseUrl}/StandCRUD.php?id=${id}`);
  }

  public addStand(stand: Stand): Observable<Stand> {
    return this.http.post<Stand>(`${this.apiBaseUrl}/StandCRUD.php`, stand);
  }

  public updateStand(id:Number,stand: Stand): Observable<Stand> {
    return this.http.put<Stand>(`${this.apiBaseUrl}/StandCRUD.php?id=${id}`, stand);
  }

  public deleteStand(id:Number): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/StandCRUD.php?id=${id}`);
  }
}
