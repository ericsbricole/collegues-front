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

  constructor(private _dataService: DataService) { }

  ngOnInit() { }

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
    this._dataService.publishCollegueCourant(matricule).subscribe(col => {}, err => {});
  }

}
