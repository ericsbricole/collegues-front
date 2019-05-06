import { Routes } from "@angular/router";
import { GallerieComponent } from './app/gallerie/gallerie.component';
import { AccueilComponent } from './app/accueil/accueil.component';
import { InfoCollegueComponent } from './app/info-collegue/info-collegue.component';

export const ADMIN_ROUTES: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'gallerie/:MATRICULE_SELECTIONNE', component: InfoCollegueComponent },
  { path: 'gallerie', component: GallerieComponent },
];
