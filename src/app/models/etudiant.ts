import { Tache } from './tache';

export interface Etudiant {
  idEtudiant?: number;
  nomEt: string;
  prenomEt: string;
  cin?: number;
  ecole?: string;
  dateNaissance?: string; // ISO date string (e.g., '2000-01-01')
  taches?: Tache[];
  montantInscription?: number;
  typeEtudiant?: string; // Assuming TypeEtudiant is a string enum
}