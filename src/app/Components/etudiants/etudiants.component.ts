import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/models/etudiants';
import { FoyerService } from 'src/app/services/foyer.service';
import { TypeEtudiant } from 'src/app/models/TypeEtudaint';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit{
  etudiants: Etudiant[] = [];
  newEtudiant: Etudiant = {} as Etudiant;
  displayDialog: boolean = false;
  isEditMode: boolean = false;
  typeEtudiantOptions = Object.values(TypeEtudiant);

  constructor(private foyerS: FoyerService) {}

  ngOnInit(): void {
    this.getEtudiants();
  }

  getEtudiants(): void {
    this.foyerS.getAllEtudiants().subscribe(data => {
      this.etudiants = data;
    });
  }

  addEtudiant(): void {
    if (this.isEditMode) {
      this.foyerS.updateEtudiant(this.newEtudiant).subscribe(updated => {
        const index = this.etudiants.findIndex(e => e.idEtudiant === updated.idEtudiant);
        if (index !== -1) this.etudiants[index] = updated;
        this.displayDialog = false;
        this.resetNewEtudiant();
      });
    } else {
      this.foyerS.addEtudiant(this.newEtudiant).subscribe(etudiant => {
        this.etudiants.push(etudiant);
        this.displayDialog = false;
        this.resetNewEtudiant();
      });
    }
  }
  
  
  
  resetNewEtudiant() {
    this.newEtudiant = {
      idEtudiant: 0,
      cin: 0,
      nomEt: '',
      prenomEt: '',
      ecole: '',
      dateNaissance: '',
      montantInscription: 500,
      typeEtudiant: TypeEtudiant.ORDINAIRE, 
      taches: [],
      reservations: [],
      tache: null
    };
  }
  
  

  deleteEtudiant(id: number): void {
    this.foyerS.deleteEtudiant(id).subscribe(() => {
      this.etudiants = this.etudiants.filter(e => e.idEtudiant !== id);
    });
  }

  upDateEtudiant(id: number): void {
    const etu = this.etudiants.find(e => e.idEtudiant === id);
    if (etu) {
      this.newEtudiant = { ...etu }; // copie de l'étudiant sélectionné
      this.isEditMode = true;
      this.displayDialog = true;
    }
  }
  
  
  showAddDialog() {
    this.resetNewEtudiant();
    this.isEditMode = false;
    this.displayDialog = true;
  }
  
}
