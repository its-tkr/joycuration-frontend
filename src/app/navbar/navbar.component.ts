import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuShown: boolean = false;

  toggleMenu(): void {
    this.isMenuShown = !this.isMenuShown;
  }

  showMenu(): void {
    this.isMenuShown = true;
  }

  hideMenu(): void {
    this.isMenuShown = false;
  }
  
  linkAction(): void {
    this.isMenuShown = false;
  }
}
