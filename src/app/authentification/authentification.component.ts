import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Collegue } from '../models/Collegue';
import { AuthService } from '../services/auth-service.service';
import { InfosAuthent } from '../models/InfosAuthent';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  private _infosAuthent = new InfosAuthent();
  get infosAuthent() {
    return this._infosAuthent;
  }

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(loginFG: NgForm) {
    this._authService.connection(this._infosAuthent);
  }

}
