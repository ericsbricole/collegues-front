import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-info-collegue',
  templateUrl: './info-collegue.component.html',
  styleUrls: ['./info-collegue.component.css']
})
export class InfoCollegueComponent implements OnInit {

  private _collegueAffiche: Collegue;

  constructor(private _route: ActivatedRoute, private _dataService: DataService) { }

  ngOnInit() {
    console.log("ALLOO" + this._route);
    let matricule =this._route.children.values;
   console.log(`a récupéré ${matricule}`);
  }

}
