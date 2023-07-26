// import { Component } from '@angular/core';
// import * as $ from 'jquery';

// // Declare the type for the 'document' object
// declare const document: Document;
// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
// })
// export class HomeComponent {
  
//   $(document).ready(() => {
//     $('form > input').keyup(() => {
//       let empty = false;
//       $('form > input').each(function () {
//         if ($(this).val() === '') {
//           empty = true;
//         }
//       });
  
//       if (empty) {
//         $('#login').attr('disabled', 'disabled');
//       } else {
//         $('#login').removeAttr('disabled');
//       }
//     });
//   });

// }
import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

declare const $: any; // Import jQuery

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.initializeFormValidation();
  }

  private initializeFormValidation(): void {
    const inputElements = this.elementRef.nativeElement.querySelectorAll('form > input');

    $(inputElements).keyup(() => {
      let empty = false;

      inputElements.forEach((input: any) => {
        if (input.value === '') {
          empty = true;
        }
      });

      const loginButton = this.elementRef.nativeElement.querySelector('#login');
      if (empty) {
        this.renderer.setAttribute(loginButton, 'disabled', 'disabled');
      } else {
        this.renderer.removeAttribute(loginButton, 'disabled');
      }
    });
  }
}
