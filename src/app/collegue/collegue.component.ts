import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit, OnDestroy {

  public modifyingCollegue = false;
  @Input() public myCollegue: Collegue;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.exposeCollegueCourant().subscribe(
        collegue => this.myCollegue = collegue
    );
  }

  ngOnDestroy() { }

  modifyCollegue() {
    console.log('Modification du collègue');
    this.modifyingCollegue = !this.modifyingCollegue;
  }

  updateCollegueIinfo() {
    //TODO
  }

}
