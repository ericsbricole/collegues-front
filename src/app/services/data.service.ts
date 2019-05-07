import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PhotoCollegue } from '../models/PhotoCollegue';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private URL_BACKEND = environment.backendUrl;
  private _subject = new Subject<Collegue>();
  private _createdCollegueSubject = new Subject<Collegue>();
  private _cacheCollegues = new Map<string, Collegue>();

  get subject() {
    return this._subject;
  }

  get createdCollegueSubject() {
    return this._createdCollegueSubject;
  }

  get cacheCollegues() {
    return this._cacheCollegues;
  }

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

  createCollegue(collegueAAjouter: Collegue): Observable<Collegue> {
    const body = {
      'nom': collegueAAjouter.nom,
      'prenoms': collegueAAjouter.prenoms,
      'email': collegueAAjouter.email,
      'dateDeNaissance': collegueAAjouter.dateDeNaissance,
      'photoUrl': collegueAAjouter.photoUrl
    };
    return this._http.post<Collegue>(`${this.URL_BACKEND}/collegues/`, body)
      .pipe(
        tap((collegueCreated: Collegue) => this._createdCollegueSubject.next(collegueCreated))
      );
  }

  rechercherToutesLesPhotos() {
    return this._http.get<PhotoCollegue[]>(`${this.URL_BACKEND}/collegues/photos`);
  }
}
