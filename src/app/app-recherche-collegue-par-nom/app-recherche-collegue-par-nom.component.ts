import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subject, Subscription } from 'rxjs';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-app-recherche-collegue-par-nom',
  templateUrl: './app-recherche-collegue-par-nom.component.html',
  styleUrls: ['./app-recherche-collegue-par-nom.component.css']
})
export class AppRechercheCollegueParNomComponent implements OnInit, OnDestroy {

  public searchName = '';
  public matricules: string[];
  private _subject: Subject<Collegue>;
  private _subscription: Subscription;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._subscription = this._dataService.subject.subscribe();
   }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  searchByName(nameSearchedFor: string) {
    this.searchName = nameSearchedFor;
    this.searchMatricules();
  }

  searchMatricules(): void {
    const matricules$ = this._dataService.rechercherParNom(this.searchName);
    matricules$.subscribe(
      matriculesFound => this.matricules = matriculesFound,
      (error: Error) => console.log(`Erreur ${error.message} survenue à la recherches des matricules pour ${this.searchByName}: \n ${error.name}`));
  }

  publishCollegueCourant(matricule: string): void {
    this._dataService.publishCollegueCourant(matricule).subscribe(
      col => { },
      (error: Error) => console.error(`Erreur ${error.name} survenue en essayant de publier le collègue de matricule ${matricule}: ${error.message}`)
    );
  }

}
