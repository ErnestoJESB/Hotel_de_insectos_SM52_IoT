import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Precaución',
      subHeader: 'Has apagado el PIR',
      message: 'Alguien puede causar daño al hotel',
      buttons: ['OK'],
    });
    await alert.present();
  }

}

