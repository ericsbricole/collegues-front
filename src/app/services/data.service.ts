import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { colleguesMock } from '../mock/collegues.mock';
import { collegueMock } from '../mock/collegues.mock';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  rechercherParNom(nom: string): string[] {
    const colleguesFiltered: Collegue[] = [];
    colleguesMock.forEach(c => {
      if (c.nom === nom) {
        colleguesFiltered.push(c);
      }
    });
    return colleguesFiltered.map(c => c.matricule);
  }

  recupererCollegueCourant(): Collegue {
    return collegueMock;
  }

}
