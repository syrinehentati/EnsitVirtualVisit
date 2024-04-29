import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avatar } from '../Model/Avatar';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class AvatarService {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAvatars(): Observable<Avatar[]> {
    return this.http.get<Avatar[]>(`${this.apiBaseUrl}/AvatarCRUD.php`);
  }


  

  public getAvatarByURL(url: string): Observable<Avatar> {
    return this.http.get<Avatar>(`${this.apiBaseUrl}/AvatarCRUD.php?id=${url}`);
  }

  public addAvatar(avatar: Avatar): Observable<Avatar> {
    return this.http.post<Avatar>(`${this.apiBaseUrl}/AvatarCRUD.php`, avatar);
  }

  public updateAvatar(url: string,avatar: Avatar): Observable<Avatar> {
    return this.http.put<Avatar>(`${this.apiBaseUrl}/AvatarCRUD.php?id=${url}`, avatar);
  }

  public deleteAvatar(url: string): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/AvatarCRUD.php?id=${url}`);
  }
}
