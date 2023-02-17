import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  showDetails1: boolean = false;
  showDetails2: boolean = false;
  showDetails3: boolean = false;
  showDetails4: boolean = false;
  

  constructor() {}

  toggleDetails1() {
    this.showDetails1 = !this.showDetails1;
  }
  
  toggleDetails2() {
    this.showDetails2 = !this.showDetails2;
  }
  
  toggleDetails3() {
    this.showDetails3 = !this.showDetails3;
  }
  
  toggleDetails4() {
    this.showDetails4 = !this.showDetails4;
  }
  
}

