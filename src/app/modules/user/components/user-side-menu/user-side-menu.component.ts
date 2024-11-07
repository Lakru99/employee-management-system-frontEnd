import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-side-menu',
  templateUrl: './user-side-menu.component.html',
  styleUrls: ['./user-side-menu.component.css']
})
export class UserSideMenuComponent {
  constructor(private auth: AuthService){}

  isMobileMenuOpen: boolean = false; 
  isUserMenuOpen: boolean = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }
  logout(): void{
    this.auth.logout();
  }
}
