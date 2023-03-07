import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ViewChild, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js';
import { RealtimeDatabaseService } from '../services/realtime-database.service';




@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html', 
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  public toggleValue: boolean = false;

  isToggleChecked1:boolean=false;
  isToggleChecked2:boolean=false;
  isToggleChecked3:boolean=false;
  constructor(private alertController: AlertController, private dataService: RealtimeDatabaseService) {}
 
  handleToggleClick(){
    this.enviardatos();
  }

  data: any;
  data1: any;

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data)
    });
    this.dataService.leerDatos('/seguridad/estado').subscribe((data1) => {
      this.data1 = data1;
      this.toggleValue = this.data1; // Actualiza el valor del toggle
  });
  }

    enviardatos() {
      if (this.data1 == false) {
        const ruta = '/seguridad/estado';
        const datos = true;
        this.dataService.estado(ruta,datos);
      }else if(this.data1 == true) {
        const ruta = '/seguridad/estado';
        const datos = false;
        this.dataService.estado(ruta,datos);
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
