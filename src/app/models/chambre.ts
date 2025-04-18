export interface Chambre {
    idChambre?: number;
    numeroChambre: number;
    typeC: 'SIMPLE' | 'DOUBLE' | 'TRIPLE';
    bloc?: any;
    reservations?: any[];
  }
  