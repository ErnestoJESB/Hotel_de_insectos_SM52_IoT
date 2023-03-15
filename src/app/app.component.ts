import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform:Platform,
    public router:Router
    
  ) {
    this.initializeApp()
  }

  initializeApp(){
    this.platform.ready().then(()=>{
      this.router.navigateByUrl('splash')
      this.checkDarkTheme()
    })
  }
// verificar lo del modo oscuro si se encuentra o no activo
  checkDarkTheme(){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDark.matches) {
      document.body.classList.toggle('dark');
    }
  }
}
