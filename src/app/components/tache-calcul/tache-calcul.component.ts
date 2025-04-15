import { Component, OnInit } from '@angular/core';
import { TacheService } from '../../services/tache.service';
import { Montant } from '../../models/montant';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-tache-calcul',
  templateUrl: './tache-calcul.component.html',
  styleUrls: ['./tache-calcul.component.css']
})
export class TacheCalculComponent implements OnInit {
  montants: { name: string, amount: number }[] = [];

  constructor(private tacheService: TacheService, public router: Router) { } // Inject Router

  ngOnInit(): void {
    this.loadMontants();
  }

  loadMontants(): void {
    this.tacheService.calculMontant().subscribe(data => {
      this.montants = Object.keys(data).map(key => ({
        name: key,
        amount: data[key]
      }));
    });
  }
}