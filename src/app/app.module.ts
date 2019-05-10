import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { AppRechercheCollegueParNomComponent } from './app-recherche-collegue-par-nom/app-recherche-collegue-par-nom.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreerCollegueComponent } from './creer-collegue/creer-collegue.component';
import { UrlValidatorDirective } from './validators/url-validator.directive';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { MenuComponent } from './menu/menu.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { RouterModule } from '@angular/router';
import { ADMIN_ROUTES } from 'src/admin.routes';
import { AccueilComponent } from './accueil/accueil.component';
import { InfoCollegueComponent } from './info-collegue/info-collegue.component';
import { AuthentificationComponent } from './authentification/authentification.component';

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    AppRechercheCollegueParNomComponent,
    CreerCollegueComponent,
    UrlValidatorDirective,
    EmailValidatorDirective,
    MenuComponent,
    GallerieComponent,
    AccueilComponent,
    InfoCollegueComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ADMIN_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
