import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-app-recherche-collegue-par-nom',
  templateUrl: './app-recherche-collegue-par-nom.component.html',
  styleUrls: ['./app-recherche-collegue-par-nom.component.css']
})
export class AppRechercheCollegueParNomComponent implements OnInit {

  public searchName = '';
  public matricules: string[];
  private _cacheCollegues = new Map<string, Collegue>();


  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.createdCollegueSubject.subscribe(
      collegueCreated => {
        this.putCollegueInCache(collegueCreated);
      }
    );
  }

  searchByName(nameSearchedFor: string) {
    this.searchName = nameSearchedFor;
    this.searchMatricules();
  }

  searchMatricules(): void {
    const matricules$ = this._dataService.rechercherParNom(this.searchName);
    matricules$.subscribe(
      matriculesFound => this.matricules = matriculesFound,
      (error: Error) => console.log(`${error.message}\n ${error.name}`));
  }

  publishCollegueCourant(matricule: string): void {
    if (this._cacheCollegues.has(matricule)) {
      this._dataService.exposeCollegueCourant().next(this._cacheCollegues.get(matricule));
    }
    this._dataService.publishCollegueCourant(matricule).subscribe(collegueFound => {
      this.putCollegueInCache(collegueFound);
    }, err => { });
  }

  putCollegueInCache(collegueToPutInCache: Collegue) {
    if (!this._cacheCollegues.has(collegueToPutInCache.matricule)) {
      console.log(`ajout de ${collegueToPutInCache.nom} dans le cache`);
      this._cacheCollegues.set(collegueToPutInCache.matricule, collegueToPutInCache);
    }
  }

}
