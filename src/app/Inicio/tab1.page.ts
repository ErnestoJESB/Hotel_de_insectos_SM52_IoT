// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-tab1',
//   templateUrl: 'tab1.page.html',
//   styleUrls: ['tab1.page.scss']
// })
// export class Tab1Page {

//   constructor() {}

// }

// export class HomePage {
//   slideOpts = {
//     initialSlide: 0,
//     speed: 400,
//     slidesPerView: 1,
//     breakpoints: {
//       640: {
//         slidesPerView: 2,
//       },
//       768: {
//         slidesPerView: 3,
//       },
//       1024: {
//         slidesPerView: 4,
//       },
//     },
//   };
// }

import { Component, OnInit } from '@angular/core';
import { RealtimeDatabaseService } from '../services/realtime-database.service';
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[changeColor]'
})
export class ChangeColorDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    const backgroundColor = window.getComputedStyle(elRef.nativeElement).getPropertyValue('background-color');
    const svg = elRef.nativeElement.querySelector('svg');
    if (backgroundColor === 'rgb(255, 255, 255)') {
      renderer.setAttribute(svg, 'stroke', '#000000');
    } else {
      renderer.setAttribute(svg, 'stroke', '#ffffff');
    }
  }
}


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  fondoNegro = true;
  cambiarColor() {
    this.fondoNegro = !this.fondoNegro;
  }

  darkMode: boolean = true;
  modo: string = 'Modo Oscuro';
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  };
  
  
  constructor(private dataService: RealtimeDatabaseService,) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;

  }

  data: any;
  ngOnInit() {
    this.dataService.leertemp('/seguridad_2').subscribe((data) => {
      this.data = data;
      });
  }

  cambio(){
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode =!this.darkMode;
    document.body.classList.toggle('dark');
    if (this.darkMode) {
      this.modo = 'Modo Oscuro';
    } else {
      this.modo = 'Modo Claro';
    }
  }

  cambioicon(){
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode =!this.darkMode;
    document.body.classList.toggle('dark');
    if (this.darkMode) {
      this.modo = 'Modo Oscuro';
    } else {
      this.modo = 'Modo Claro';
    }
  }
  
}

