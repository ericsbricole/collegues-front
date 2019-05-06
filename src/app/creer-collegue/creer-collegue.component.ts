import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-creer-collegue',
  templateUrl: './creer-collegue.component.html',
  styleUrls: ['./creer-collegue.component.css']
})
export class CreerCollegueComponent implements OnInit {

  @Input() private _collegueToCreate = new Collegue('', '', '', 'monemail@example.com', null, 'http://example.com/maphoto.jpg');
  private _createNewCollegueError = '';
  private _createNewCollegueSuccessMsg = '';

  get collegueToCreate() {
    return this._collegueToCreate;
  }

  get createNewCollegueError() {
    return this._createNewCollegueError;
  }

  get createNewCollegueSuccessMsg() {
    return this._createNewCollegueSuccessMsg;
  }

  constructor(private _dataService: DataService) { }

  ngOnInit() {  }

  createCollegue() {
    this._createNewCollegueError = '';
    this._createNewCollegueSuccessMsg = '';
    this._dataService.createCollegue(this._collegueToCreate).subscribe(
      (collegueCreated: Collegue) => { this._createNewCollegueSuccessMsg = `Le collègue ${collegueCreated.nom} a été crée avec succés!`;
    },
      (error: Error) => this._createNewCollegueError = `Une erreur ${error.name} est arrivée à la création du collègue.`
    );

  }

}
