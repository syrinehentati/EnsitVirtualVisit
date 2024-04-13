import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/User'; 
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/User/all`);
  }

  public getUsersByMail(mail: string): Observable<User> {
    return this.http.get<User>(`${this.apiServerUrl}/User/find/${mail}`);
  }

  public addUser(User: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/User/add`, User);
  }
}
