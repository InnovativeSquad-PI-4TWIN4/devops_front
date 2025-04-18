import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../models/etudiants';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {


  private apiUrl = 'http://localhost:8089/foyer/etudiant'; // Adresse du backend

  constructor(private http: HttpClient) {}

  // 🔹 Récupérer tous les étudiants
  getAllEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>('http://localhost:8089/foyer/etudiant/retrieve-all-etudiants');

  }

  getEtudiantById(id: number): Observable<Etudiant> {
    return this.http.get<Etudiant>(`${this.apiUrl}/${id}`);
  }

  addEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>('http://localhost:8089/foyer/etudiant/add-etudiant', etudiant);
  }

  updateEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.put<Etudiant>(`${this.apiUrl}/update-etudiant`, etudiant);
  }

  deleteEtudiant(id: number): Observable<void> {
    return this.http.delete<void>(`${'http://localhost:8089/foyer/etudiant/removeEtudiant'}/${id}`);
  }
 
}
