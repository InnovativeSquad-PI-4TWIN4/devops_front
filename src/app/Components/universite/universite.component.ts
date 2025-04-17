import { Component, OnInit } from '@angular/core';
import { Universite } from 'src/app/models/universite';
import { UniversiteService } from 'src/app/services/universite.service';

@Component({
  selector: 'app-universite',
  templateUrl: './universite.component.html',
  styleUrls: ['./universite.component.css']
})
export class UniversiteComponent implements OnInit {
  universites: Universite[] = [];
  newUniversite: Universite = { nomUniversite: '', adresse: '' };
  selectedUniversite: Universite | null = null;

  constructor(private universiteService: UniversiteService) {}

  ngOnInit(): void {
    this.getAllUniversites();
  }

  get currentUniversite(): Universite {
    return this.selectedUniversite ?? this.newUniversite;
  }

  getAllUniversites(): void {
    this.universiteService.getAllUniversites().subscribe((data) => {
      this.universites = data;
    });
  }

  saveUniversite(): void {
    if (this.selectedUniversite) {
      this.universiteService.updateUniversite(this.selectedUniversite).subscribe(() => {
        this.getAllUniversites();
        this.selectedUniversite = null;
      });
    } else {
      this.universiteService.addUniversite(this.newUniversite).subscribe(() => {
        this.getAllUniversites();
        this.newUniversite = { nomUniversite: '', adresse: '' };
      });
    }
  }

  editUniversite(u: Universite): void {
    this.selectedUniversite = { ...u };
  }

  cancelEdit(): void {
    this.selectedUniversite = null;
  }

  deleteUniversite(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cette université ?')) {
      this.universiteService.deleteUniversite(id).subscribe(() => {
        this.getAllUniversites();
      });
    }
  }
}
