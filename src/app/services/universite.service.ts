import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Universite } from '../models/universite';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  private baseUrl = 'http://localhost:8089/foyer/universite';

  constructor(private http: HttpClient) {}

  getAllUniversites(): Observable<Universite[]> {
    return this.http.get<Universite[]>(`${this.baseUrl}/retrieve-all-universites`);
  }

  getUniversiteById(id: number): Observable<Universite> {
    return this.http.get<Universite>(`${this.baseUrl}/retrieve-universite/${id}`);
  }

  addUniversite(universite: Universite): Observable<Universite> {
    return this.http.post<Universite>(`${this.baseUrl}/add-universite`, universite);
  }

  updateUniversite(universite: Universite): Observable<Universite> {
    return this.http.put<Universite>(`${this.baseUrl}/update-universite`, universite);
  }

  deleteUniversite(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/removeUniversite/${id}`);
  }
}
