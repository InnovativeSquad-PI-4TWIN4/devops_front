import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Tache } from '../models/tache';
import { Etudiant } from '../models/etudiant';
import { Montant } from '../models/montant';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  private apiUrl = 'http://localhost:8089/foyer/tache';

  constructor(private http: HttpClient) { }

  getAllTaches(): Observable<Tache[]> {
    return this.http.get<Tache[]>(`${this.apiUrl}/retrieve-all-taches`).pipe(
      catchError(error => {
        console.error('Error fetching tasks:', error);
        return throwError(() => new Error('Failed to fetch tasks. Please try again later.'));
      })
    );
  }

  getTache(id: number): Observable<Tache> {
    return this.http.get<Tache>(`${this.apiUrl}/retrieve-tache/${id}`).pipe(
      catchError(error => {
        console.error('Error fetching task:', error);
        return throwError(() => new Error('Failed to fetch task'));
      })
    );
  }

  addTache(tache: Tache): Observable<Tache> {
    return this.http.post<Tache>(`${this.apiUrl}/add-tache`, tache).pipe(
      catchError(error => {
        console.error('Error adding task:', error);
        return throwError(() => new Error('Failed to add task'));
      })
    );
  }

  updateTache(tache: Tache): Observable<Tache> {
    return this.http.put<Tache>(`${this.apiUrl}/update-tache`, tache).pipe(
      catchError(error => {
        console.error('Error updating task:', error);
        return throwError(() => new Error('Failed to update task'));
      })
    );
  }

  deleteTache(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/removeTache/${id}`).pipe(
      catchError(error => {
        console.error('Error deleting task:', error);
        return throwError(() => new Error('Failed to delete task'));
      })
    );
  }

  addTachesAndAffect(nomEt: string, prenomEt: string, taches: Tache[]): Observable<Tache[]> {
    return this.http.post<Tache[]>(`${this.apiUrl}/addTachesAndAffectToEtudiant/${nomEt}/${prenomEt}`, taches).pipe(
      catchError(error => {
        console.error('Error assigning tasks:', error);
        return throwError(() => new Error('Failed to assign tasks'));
      })
    );
  }

  calculMontant(): Observable<Montant> {
    return this.http.get<Montant>(`${this.apiUrl}/calculNouveauMontantInscriptionDesEtudiants`).pipe(
      catchError(error => {
        console.error('Error calculating amounts:', error);
        return throwError(() => new Error('Failed to calculate amounts'));
      })
    );
  }

  getAllEtudiants(): Observable<Etudiant[]> {
    return this.getAllTaches().pipe(
      map(taches => {
        const etudiantsMap = new Map<number, Etudiant>();
        taches.forEach(tache => {
          if (tache.etudiant && tache.etudiant.idEtudiant) {
            etudiantsMap.set(tache.etudiant.idEtudiant, tache.etudiant);
          }
        });
        return Array.from(etudiantsMap.values());
      }),
      catchError(error => {
        console.error('Error fetching students:', error);
        return throwError(() => new Error('Failed to fetch students'));
      })
    );
  }
}