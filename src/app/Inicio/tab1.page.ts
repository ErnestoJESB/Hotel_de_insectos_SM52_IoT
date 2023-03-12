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

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

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
  
  constructor() {}

}

