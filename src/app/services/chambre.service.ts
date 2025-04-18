import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chambre } from '../models/chambre';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  private baseUrl = 'http://localhost:8089/foyer/chambre';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${this.baseUrl}/retrieve-all-chambres`);
  }

  getById(id: number): Observable<Chambre> {
    return this.http.get<Chambre>(`${this.baseUrl}/retrieve-chambre/${id}`);
  }

  add(chambre: Chambre): Observable<Chambre> {
    return this.http.post<Chambre>(`${this.baseUrl}/add-chambre`, chambre);
  }

  update(chambre: Chambre): Observable<Chambre> {
    return this.http.put<Chambre>(`${this.baseUrl}/update-chambre`, chambre);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/removeChambre/${id}`);
  }
}
