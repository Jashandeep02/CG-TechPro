// nav-menu.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'] // Add your custom CSS here if needed
})
export class NavMenuComponent {
  isSlideOutVisible: boolean = false;

  toggleSlideOut() {
    this.isSlideOutVisible = !this.isSlideOutVisible;
  }
}
