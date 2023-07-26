import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isSlideOutVisible = false;

  @ViewChild('slideOutDiv', { static: false }) slideOutDiv!: ElementRef;

  constructor(private renderer: Renderer2) {}

  toggleSlideOut() {
    this.isSlideOutVisible = !this.isSlideOutVisible;

    if (this.slideOutDiv) {
      if (this.isSlideOutVisible) {
        this.renderer.addClass(this.slideOutDiv.nativeElement, 'show-slide-out');
      } else {
        this.renderer.removeClass(this.slideOutDiv.nativeElement, 'show-slide-out');
      }
    }
  }
}
