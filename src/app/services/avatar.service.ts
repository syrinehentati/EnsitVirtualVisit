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
    return this.http.get<Avatar[]>(`${this.apiBaseUrl}/Avatar/all`);
  }


  public getAvatars2(): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/test.php`);
  }

  public getAvatarByURL(url: string): Observable<Avatar> {
    return this.http.get<Avatar>(`${this.apiBaseUrl}/Avatar/find/${url}`);
  }

  public addAvatar(avatar: Avatar): Observable<Avatar> {
    return this.http.post<Avatar>(`${this.apiBaseUrl}/Avatar/add`, avatar);
  }

  public updateAvatar(avatar: Avatar): Observable<Avatar> {
    return this.http.put<Avatar>(`${this.apiBaseUrl}/Avatar/update`, avatar);
  }

  public deleteAvatar(url: string): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/Avatar/delete/${url}`);
  }
}
