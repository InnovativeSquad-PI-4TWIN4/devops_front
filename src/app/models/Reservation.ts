export interface Reservation {
    idReservation: number;
    dateReservation: string; // Format LocalDate
    etudiants: number[]; // Liste des IDs des étudiants associés
  }
  