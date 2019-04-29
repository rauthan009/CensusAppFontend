import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../Shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,private userService:UserService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
      if(localStorage.getItem('userToken')!=null)
          {let roles = next.data["roles"] as Array<string>;
          if (roles) {
            var match = this.userService.roleMatch(roles);
            if (match) return true;
            else {
              this.router.navigate(['/forbidden']);
              return false;
            }
          }
          else
            return true;
          }
      else
        this.router.navigate(['/Login']);
        return false;

  }
  
}
