import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { InfosAuthent } from '../models/InfosAuthent';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL_BACKEND = environment.backendUrl;
  public estConnecte = false;

  constructor(private _http: HttpClient) { }

  public connection(infosAuthent: InfosAuthent) {
    console.log(infosAuthent.email);
    console.log(infosAuthent.motDePasse);
    this._http.post<void>(`${this.URL_BACKEND}/auth`, { email: infosAuthent.email, password: infosAuthent.motDePasse }, { observe: 'response', withCredentials :true }).subscribe(
      (obs) => this.estConnecte = obs.status === 200,
      (error: Error) => console.log("une erreur " + error.name + " est arrivée. message:\n" + error.message),
      () => console.log("fin de la requete, est connecte? " + this.estConnecte)
    );
  }

}
