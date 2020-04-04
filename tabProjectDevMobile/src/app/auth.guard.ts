import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {
  constructor(private service: AuthService, private router: Router){

  }
  // tslint:disable-next-line: max-line-length
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.service.redirectUrl = state.url;
    return this.checkConnexion();

  }

  checkConnexion(): boolean {
    if (window.localStorage.getItem("token")) {
    return true;
    }
    this.router.navigate(['connexion']);
    return false;
    }

}
