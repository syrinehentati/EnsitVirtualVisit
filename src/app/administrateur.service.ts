import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { administrateur } from './Model/administrateur';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdministrateurService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getadministrateurs(): Observable<administrateur[]> {
    return this.http.get<administrateur[]>(`${this.apiBaseUrl}/AdministrateursCRUD.php`);
  }

  public getadministrateurByEmail(email: string): Observable<administrateur> {
    return this.http.get<administrateur>(`${this.apiBaseUrl}/AdministrateursCRUD.php?email=${email}`);
  }

  public addadministrateur(administrateur: administrateur): Observable<administrateur> {
    return this.http.post<administrateur>(`${this.apiBaseUrl}/AdministrateursCRUD.php`, administrateur);
  }

  public updateadministrateur(email: string,administrateur: administrateur): Observable<administrateur> {
    return this.http.put<administrateur>(`${this.apiBaseUrl}/AdministrateursCRUD?email=${email}`, administrateur);
  }

  public deleteadministrateur(email: string): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/AdministrateursCRUD.php?email=${email}`);
  }
}

