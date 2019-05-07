import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-info-collegue',
  templateUrl: './info-collegue.component.html',
  styleUrls: ['./info-collegue.component.css']
})
export class InfoCollegueComponent implements OnInit, OnDestroy {

  private _collegueCourant: Collegue;
  private _subscription: Subscription;

  get collegueCourant() {
    return this._collegueCourant;
  }

  constructor(private _route: ActivatedRoute, private _dataService: DataService) { }

  ngOnInit() {
    const matricule = this._route.snapshot.params["MATRICULE_SELECTIONNE"];
    this._subscription = this._dataService.subject.subscribe(
      collegueCourant => this._collegueCourant = collegueCourant,
      (error: Error) => console.log(`erreur ${error.name}\n ${error.message}`)
    );
    this._dataService.publishCollegueCourant(matricule).subscribe(
      col => { },
      (error: Error) => console.log(`erreur ${error.name}\n ${error.message}`)
    );
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

}
