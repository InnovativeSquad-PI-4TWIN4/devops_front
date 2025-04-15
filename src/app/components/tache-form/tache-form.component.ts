import { Component, OnInit } from '@angular/core';
import { TacheService } from '../../services/tache.service';
import { Tache } from '../../models/tache';
import { Etudiant } from '../../models/etudiant';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tache-form',
  templateUrl: './tache-form.component.html',
  styleUrls: ['./tache-form.component.css']
})
export class TacheFormComponent implements OnInit {
  tache: Tache = { dateTache: '', duree: 0, typeTache: '' };
  etudiants: Etudiant[] = [];
  isEditMode = false;

  constructor(
    private tacheService: TacheService,
    private route: ActivatedRoute,
    public router: Router // Change 'private' to 'public'
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.tacheService.getTache(+id).subscribe(data => {
        this.tache = data;
      });
    }
    this.loadEtudiants();
  }

  loadEtudiants(): void {
    this.tacheService.getAllEtudiants().subscribe(data => {
      this.etudiants = data;
    });
  }

  saveTache(): void {
    if (this.isEditMode) {
      this.tacheService.updateTache(this.tache).subscribe(() => {
        this.router.navigate(['/taches']);
      });
    } else {
      this.tacheService.addTache(this.tache).subscribe(() => {
        this.router.navigate(['/taches']);
      });
    }
  }

  assignToStudent(): void {
    if (this.tache.etudiant) {
      this.tacheService.addTachesAndAffect(
        this.tache.etudiant.nomEt,
        this.tache.etudiant.prenomEt,
        [this.tache]
      ).subscribe(() => {
        this.router.navigate(['/taches']);
      });
    }
  }
}