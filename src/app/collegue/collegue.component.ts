import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { Observable, Subject, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit, OnDestroy {

  public modifyingCollegue = false;
  private _createNewCollegue = false;
  private _subscription: Subscription;

  get subscription() {
    return this._subscription;
  }

  get createNewCollegue() {
    return this._createNewCollegue;
  }
  @Input() public myCollegue: Collegue;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._subscription = this._dataService.subject.subscribe(
      collegue => {
        console.log(`récupération du collègue ${collegue.prenoms} publié par le subject`);
        this.myCollegue = collegue;
      }
    );
  }

  ngOnDestroy() {
    console.log(`unsubscribe() du subject à la destruction du compo collègue`);
    this._subscription.unsubscribe();
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

  hideOrShowModifyCollegueForm() {
    console.log('Modification du collègue');
    this.modifyingCollegue = !this.modifyingCollegue;
  }


}
