import { Component, OnInit } from '@angular/core';
import { TacheService } from '../../services/tache.service';
import { Tache } from '../../models/tache';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tache-list',
  templateUrl: './tache-list.component.html',
  styleUrls: ['./tache-list.component.css']
})
export class TacheListComponent implements OnInit {
  taches: Tache[] = [];
  errorMessage: string | null = null; // Add error message property

  constructor(private tacheService: TacheService, private router: Router) { }

  ngOnInit(): void {
    this.loadTaches();
  }

  loadTaches(): void {
    this.tacheService.getAllTaches().subscribe({
      next: (data) => {
        this.taches = data;
        this.errorMessage = null; // Clear error message on success
      },
      error: (error) => {
        this.errorMessage = error.message; // Display error message
      }
    });
  }

  editTache(id: number): void {
    this.router.navigate(['/update-tache', id]);
  }

  deleteTache(id: number): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.tacheService.deleteTache(id).subscribe({
        next: () => {
          this.loadTaches();
        },
        error: (error) => {
          this.errorMessage = error.message;
        }
      });
    }
  }
}