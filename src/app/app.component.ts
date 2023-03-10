import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  splash =true;
  notificacionAudio = new Audio("../assets/audios/bee-effects.mp3");
  constructor(
    
  ) {}
}
