import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  public modifyingCollegue = false;
  @Input() public myCollegue: Collegue;

  constructor() { }

  ngOnInit() {
  }

  modifyCollegue() {
    console.log('Modification du collègue');
    this.modifyingCollegue = !this.modifyingCollegue;
  }

  updateCollegueIinfo() {
    //TODO
  }

}
