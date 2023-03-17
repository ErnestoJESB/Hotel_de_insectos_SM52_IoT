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
  numero: number = 0;
  
  
  public toggleValue: boolean = false;

  isToggleChecked1:boolean=false;
  isToggleChecked2:boolean=false;
  isToggleChecked3:boolean=false;
  constructor(
    private alertController: AlertController, 
    private dataService: RealtimeDatabaseService,
    )
     {}

     incrementarNumero() {
      this.numero++;}
 
  handleToggleClick(){
    this.enviardatos();
  }

  data: any;
  data1: any;
  data2: any;

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data)
    });
    this.dataService.leerDatos('/seguridad/estado').subscribe((data1) => {
      this.data1 = data1;
      this.toggleValue = this.data1; // Actualiza el valor del toggle
  });
this.dataService.leertemp('/seguridad/temperatura').subscribe((data2) => {
  this.data2 = data2;
  console.log(this.data2);
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
  if (this.toggleValue== true) {
    const alert = await this.alertController.create({
      header: 'Precaución',
      subHeader: 'Has apagado el PIR',
      message: 'Alguien puede causar daño al hotel',
      buttons: ['OK'],
    });
    await alert.present();
  }
}


  funciones(){
    this.presentAlert();
    this.handleToggleClick();
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


  /* Crea un constructor */
  temperatura() { 
    let templocal = this.data2;
    console.log(templocal);
  }


  
}
