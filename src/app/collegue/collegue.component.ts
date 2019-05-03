import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { Observable, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit, OnDestroy {

  public modifyingCollegue = false;
  private _createNewCollegue = false;
  get createNewCollegue() {
    return this._createNewCollegue;
  }
  @Input() public myCollegue: Collegue;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.exposeCollegueCourant().subscribe(
      collegue => this.myCollegue = collegue
    );
  }

  ngOnDestroy() { }

  hideOrShowModifyCollegueForm() {
    console.log('Modification du collègue');
    this.modifyingCollegue = !this.modifyingCollegue;
  }

  submitModifyCollegue() {
    this._dataService.modifyCollegueEmail(this.myCollegue.matricule, this.myCollegue.email)
      .subscribe(
        CollegueModified => { },
        (error: Error) => console.error(`Erreur ${error.name}\navec le message suivant: ${error.message}`)
      );
    this._dataService.modifyColleguePhotoUrl(this.myCollegue.matricule, this.myCollegue.photoUrl)
      .subscribe(
        CollegueModified => { },
        (error: Error) => console.error(`Erreur ${error.name}\navec le message suivant: ${error.message}`)
      );
    this.modifyingCollegue = !this.modifyingCollegue;
  }

  hideOrShowCreateCompo() {
    this._createNewCollegue = !this._createNewCollegue;
  }

}
