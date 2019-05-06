import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  collegueCourant: Collegue;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.exposeCollegueCourant().subscribe(
      collegue => this.collegueCourant = collegue
    );
  }

}
