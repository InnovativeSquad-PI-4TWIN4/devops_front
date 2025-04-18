import { Component, OnInit } from '@angular/core';
import { Chambre } from 'src/app/models/chambre';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css']
})
export class ChambreComponent implements OnInit {

  chambres: Chambre[] = [];
  chambreForm: Chambre = { numeroChambre: 0, typeC: 'SIMPLE' };
  isEdit: boolean = false;

  constructor(private chambreService: ChambreService) {}

  ngOnInit(): void {
    this.getChambres();
  }

  getChambres(): void {
    this.chambreService.getAll().subscribe((data) => {
      this.chambres = data;
    });
  }

  saveChambre(): void {
    if (this.isEdit && this.chambreForm.idChambre) {
      this.chambreService.update(this.chambreForm).subscribe(() => {
        this.getChambres();
        this.resetForm();
      });
    } else {
      this.chambreService.add(this.chambreForm).subscribe(() => {
        this.getChambres();
        this.resetForm();
      });
    }
  }

  editChambre(chambre: Chambre): void {
    this.chambreForm = { ...chambre };
    this.isEdit = true;
  }

  deleteChambre(id: number): void {
    this.chambreService.delete(id).subscribe(() => {
      this.getChambres();
    });
  }

  resetForm(): void {
    this.chambreForm = { numeroChambre: 0, typeC: 'SIMPLE' };
    this.isEdit = false;
  }
}
