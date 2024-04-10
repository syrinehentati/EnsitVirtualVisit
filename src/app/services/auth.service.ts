import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../Model/Admin'; 
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.apiServerUrl}/User/all`);
  }

  public getAdminsByMail(mail: string): Observable<Admin> {
    return this.http.get<Admin>(`${this.apiServerUrl}/User/find/${mail}`);
  }

  public addAdmin(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(`${this.apiServerUrl}/User/add`, admin);
  }
}
