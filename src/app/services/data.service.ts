import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private URL_BACKEND: string = environment.backendUrl;
  private _subject: Subject<Collegue> = new Subject<Collegue>();

  constructor(private _http: HttpClient) { }

  rechercherParNom(nom: string): Observable<string[]> {
    return this._http.get<string[]>(`${this.URL_BACKEND}/collegues?nom=${nom}`);
  }

  private requestCollegueCourant(matricule: string): Observable<Collegue> {
    return this._http.get<Collegue>(`${this.URL_BACKEND}/collegues/${matricule}`);
  }

  publishCollegueCourant(matricule: string): Observable<Collegue> {
    return this.requestCollegueCourant(matricule)
      .pipe(
        tap(col => this._subject.next(col))
      );
  }

  exposeCollegueCourant() {
    return this._subject;
  }

  modifyColleguePhotoUrl(matricule: string, newPhotoUrl: string): Observable<Collegue> {
    return this._http.patch<Collegue>(`${this.URL_BACKEND}/collegues/modifyPhotoUrl`, {
      'matricule': matricule,
      'photoUrl': newPhotoUrl
    });
  }

  modifyCollegueEmail(matricule: string, newEmail: string): Observable<Collegue> {
    return this._http.patch<Collegue>(`${this.URL_BACKEND}/collegues/modifyEmail`, {
      'matricule': matricule,
      'email': newEmail
    });
  }

  createCollegue(collegueAAjouter: Collegue) {
    const body = {
      'nom': collegueAAjouter.nom,
      'prenoms': collegueAAjouter.prenoms,
      'email': collegueAAjouter.email,
      'dateDeNaissance': collegueAAjouter.dateDeNaissance,
      'photoUrl': collegueAAjouter.photoUrl
    };
    return this._http.post(`${this.URL_BACKEND}/collegues/`, body);

  }

}
