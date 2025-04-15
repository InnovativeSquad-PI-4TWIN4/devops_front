import { Etudiant } from './etudiant';

export interface Tache {
  idTache?: number;
  dateTache: string; // ISO date string (e.g., '2023-10-01')
  duree: number;
  tarifHoraire?: number;
  typeTache: string; // Assuming TypeTache is a string enum
  etudiant?: Etudiant;
}