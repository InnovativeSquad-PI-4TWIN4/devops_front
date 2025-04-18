import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../models/Reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = 'http://localhost:8089/foyer/reservation';

  constructor(private http: HttpClient) {}

  // 🔹 Récupérer toutes les réservations
  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/retrieve-all-reservations`);
  }

  // 🔹 Récupérer une réservation par ID
  getReservationById(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.apiUrl}/retrieve-reservation/${id}`);
  }

  // 🔹 Ajouter une réservation simple
  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.apiUrl}/add-reservation`, reservation);
  }

  // 🔹 Mettre à jour une réservation
  updateReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.apiUrl}/update-reservation`, reservation);
  }

  // 🔹 Supprimer une réservation
  deleteReservation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/removeReservation/${id}`);
  }
  

  // 🔹 Ajouter une réservation et l’assigner à une chambre + un étudiant
  addAndAssignReservation(reservation: Reservation, numChambre: number, cin: number): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.apiUrl}/ajouterReservationEtAssignerAChambreEtAEtudiant/${numChambre}/${cin}`, reservation);
  }

  // 🔹 Récupérer les réservations entre deux dates
  getReservationsByDateRange(start: string, end: string): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/getReservationParAnneeUniversitaire/${start}/${end}`);
  }
}
