import { TypeEtudiant } from "./TypeEtudaint";

export interface Etudiant {
  idEtudiant: number;
  nomEt: string;
  prenomEt: string;
  cin: number;
  ecole: string;
  dateNaissance: string;
  montantInscription: number;
  typeEtudiant: TypeEtudiant;
  taches: any[]; // ou Tache[]
  reservations: any[]; // ou Reservation[]
  tache: any; // ou Tache
}
