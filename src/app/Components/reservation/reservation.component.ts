import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservations.service';
import { Reservation } from 'src/app/models/Reservation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservations: Reservation[] = [];
  newReservation: Reservation = {
    anneeUniversitaire: '',
    estValid: false
  };
  displayDialog: boolean = false;

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.getAllReservations();
  }

  getAllReservations(): void {
    this.reservationService.getAllReservations().subscribe(data => {
      this.reservations = data;
    });
  }

  resetForm(): void {
    this.newReservation = {
      anneeUniversitaire: '',
      estValid: false
    };
  }
  
  addReservation(): void {
    if (this.newReservation.anneeUniversitaire) {
      this.reservationService.addReservation(this.newReservation).subscribe(res => {
        this.reservations.push(res);
        this.displayDialog = false;
        this.resetForm();
      }, error => {
        console.error("Erreur lors de l'ajout :", error);
      });
    }
  }
  
  

  deleteReservation(id: number | undefined): void {
    if (id !== undefined) {
      this.reservationService.deleteReservation(id).subscribe(() => {
        this.reservations = this.reservations.filter(r => r.idReservation !== id);
      });
    }
  }
  
  

  showAddDialog(): void {
    this.resetForm();
    this.displayDialog = true;
  }

 
  
}
