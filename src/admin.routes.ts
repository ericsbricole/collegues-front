import { Routes } from "@angular/router";
import { GallerieComponent } from './app/gallerie/gallerie.component';
import { AccueilComponent } from './app/accueil/accueil.component';
import { InfoCollegueComponent } from './app/info-collegue/info-collegue.component';
import { AuthentificationComponent } from './app/authentification/authentification.component';
import { ConnexionGuard } from './app/guards/connexion.guard';

export const ADMIN_ROUTES: Routes = [
  { path: 'auth', component: AuthentificationComponent },
  {
    path: '', canActivate: [ConnexionGuard], children: [
      { path: '', component: AccueilComponent },
      { path: 'gallerie/:MATRICULE_SELECTIONNE', component: InfoCollegueComponent },
      { path: 'gallerie', component: GallerieComponent }
    ]
  }
];
