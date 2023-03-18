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
        let templocal: number;
        
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
          templocal = this.data2;
        console.log(templocal);
          });

        //A partir de aquí se obtiene la fecha y se compara con el día de la semana
        let fecha: Date = new Date();
        let diaSemana: number = fecha.getDay(); // obtiene el día de la semana en formato numérico (0-6)
        console.log(diaSemana);

        const diaSem: string[] = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

        console.log(`${diaSem[diaSemana]}`);
        let ruta: string = '/seguridad/dia';
        let datos: any;
        let totaltemp: number = 0;
        let tempmedia: number = 0;
        let contador: number = 0;
      switch (diaSemana) {
        case 0:
        datos = "Domingo";
        this.dataService.dia(ruta,datos);
          break;
        case 1:
          datos = "Lunes";
          this.dataService.dia(ruta,datos);
          this.dataService.leertemp('/seguridad/temperatura').subscribe((data2) => {
            this.data2 = data2;
            templocal = this.data2;
            totaltemp = totaltemp + templocal;
            contador = contador++;
            tempmedia = totaltemp / contador;

            });
          break;
        case 2:
          datos = "Martes";
          this.dataService.dia(ruta,datos);
          break;
        case 3:
          datos = "Miércoles";
          this.dataService.dia(ruta,datos);
          break;
        case 4:
          datos = "Jueves";
          this.dataService.dia(ruta,datos);
          break;
        case 5:
          datos = "Viernes";
          this.dataService.dia(ruta,datos);
          break;
          case 6:
          datos = "Sábado";
          this.dataService.dia(ruta,datos);
          break;
        default:
          console.log("Día no válido");
      }
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
    this.dataService.leertemp('/seguridad/temperatura').subscribe((data2) => {
      this.data2 = data2;
      console.log(this.data2);
      });

    let templocal: number = this.data2;
    console.log(templocal);

    let date: Date = new Date();
    console.log("Date = " + date);
  }


  
}
