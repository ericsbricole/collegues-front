import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InfosAuthent } from '../models/InfosAuthent';
import { AuthService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ConnexionGuard implements CanActivate {


  public estConnecte = false;
  constructor(private router: Router, private _authService: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this._authService.estConnecte || this.router.parseUrl('/auth');
  }

}
