import { Component, OnInit } from '@angular/core';
import { Collegue } from './models/Collegue';
import { collegueMock } from './mock/collegues.mock';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'collegues-front';
  collegueCourant: Collegue;

  constructor(private _dataService: DataService) {}

  public ngOnInit() {
    this.collegueCourant = this._dataService.recupererCollegueCourant();
  }
}
