import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { PhotoCollegue } from '../models/PhotoCollegue';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  private _photos: PhotoCollegue[];
  private _mesgError = '';

  get photos() {
    return this._photos;
  }

  get mesgError() {
    return this._mesgError;
  }

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.rechercherToutesLesPhotos().subscribe(
      (photosCollegues: PhotoCollegue[]) => this._photos = photosCollegues,
      (error: Error) => this._mesgError = `Une erreur ${error.name} est arrivée lors de la recherche des photos avec le message suivant: ${error.message}`
    );
  }

}
