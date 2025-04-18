import { Etudiant } from './etudiants';

export interface Reservation {
  idReservation?: number; // pas string
  anneeUniversitaire: string;
  estValid: boolean;
}
