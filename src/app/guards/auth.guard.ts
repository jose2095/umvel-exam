import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  constructor(private authService:AuthService,private router:Router){}

  canActivateChild(): boolean {
    
    if(!this.authService.userToken){
      this.router.navigate(['/login']);
      return false;
    }
    
    return true;
  }
  
}
