import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ViewChild, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  isToggleChecked1:boolean=false;
  isToggleChecked2:boolean=false;
  isToggleChecked3:boolean=false;
  constructor(private alertController: AlertController) {}

  onToggleChange1(){
    if(!this.isToggleChecked1){
      this.presentAlert();
      this.isToggleChecked1=true;
    }
    else{
      this.isToggleChecked1=false;
    }
  }
  onToggleChange2(){
    if(!this.isToggleChecked2){
      this.presentAlert();
      this.isToggleChecked2=true;
    }
    else{
      this.isToggleChecked2=false;
    }
  }
  onToggleChange3(){
    if(!this.isToggleChecked3){
      this.presentAlert();
      this.isToggleChecked3=true;
    }
    else{
      this.isToggleChecked3=false;
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Precaución',
      subHeader: 'Has apagado el PIR',
      message: 'Alguien puede causar daño al hotel',
      buttons: ['OK'],
    });
    await alert.present();
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  
}


