import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { colleguesMock } from '../mock/collegues.mock';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-app-recherche-collegue-par-nom',
  templateUrl: './app-recherche-collegue-par-nom.component.html',
  styleUrls: ['./app-recherche-collegue-par-nom.component.css']
})
export class AppRechercheCollegueParNomComponent implements OnInit {

  public searchName = '';
  public collegues: Array<Collegue> = colleguesMock;

  constructor(private _dataService: DataService) { }

  ngOnInit() { }

  updateSearchName(event: Event) {
    const searchInput: HTMLInputElement = document.getElementById('searchInput') as HTMLInputElement;
    this.searchName = searchInput.value;
  }

  searchCollegues(): string[] {
    return this._dataService.rechercherParNom(this.searchName);
  }
}
