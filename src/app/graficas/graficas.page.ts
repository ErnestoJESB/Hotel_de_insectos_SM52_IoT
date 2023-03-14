import { AfterViewInit, 
  Component, 
  ElementRef,OnInit, ViewChild } from '@angular/core';
//npm i chart.js --save
import { Chart } from 'chart.js/auto';
import { RealtimeDatabaseService } from '../services/realtime-database.service';
@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.page.html',
  styleUrls: ['./graficas.page.scss'],
})
export class GraficasPage implements OnInit, AfterViewInit {
  // Importing ViewChild. We need @ViewChild decorator to get a reference to the local variable 
  // that we have added to the canvas element in the HTML template.
  @ViewChild('doughnutCanvas') private doughnutCanvas!: ElementRef;
  @ViewChild('lineCanvas') private lineCanvas!: ElementRef;
  barChart: any;
  lineChart: any;
  data: any;
  private chart!: Chart;
  scatterChart: any;
  historialH: any;


  constructor(
    private dataService: RealtimeDatabaseService) {
  
  }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
      this.lineChartMethod();
      this.scatterChartMethod();
    });
  }
  
  ngAfterViewInit() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
      this.lineChartMethod();
      this.scatterChartMethod();
    });
  }
  scatterChartMethod() {
    if (this.scatterChart) {
      console.log('algo-|', this.chart)
      this.scatterChart.destroy(); // Elimina la instancia anterior
    }

    
let datos = this.data.historial_temperatura;

this.scatterChart = new Chart(this.doughnutCanvas.nativeElement, {
  type: 'scatter',
  data: {
    labels: Object.keys(datos.historialH),
    datasets: [{
      label: datos.tittle,
      data: Object.values(datos.historialH).map((y, i) => ({x: i, y})),
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 1,
      pointBackgroundColor: 'rgba(255, 159, 64, 1)',
      pointBorderColor: '#fff',
      pointBorderWidth: 1,
      pointRadius: 5,
      pointHoverRadius: 8
    }],


    
  },

  options: {}
  
});

  //   let datos = this.data.historial_temperatura
  //   this.scatterChart = new Chart(this.scatterCanvas.nativeElement, {
  //     type: 'scatter',
  //     data: {
  //       labels: Object.keys(datos.historialH),
  //       datasets: [{
  //         label: datos.tittle,
  //         data: Object.values(datos.historialH),
  //         backgroundColor: [
  //           'rgba(255, 159, 64, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(255, 206, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)',
  //           'rgba(153, 102, 255, 0.2)',
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(255, 159, 64, 0.2)',
  //         ],
  //         hoverBackgroundColor: [
  //           '#FFCE56',
  //           '#FF6384',
  //           '#36A2EB',
  //           '#FFCE56',
  //           '#FF6384',
  //           '#FF6384',
  //           '#FF6384',
  //         ]
  //       }]
  //     }
  //   });
  // }
  }
  
  lineChartMethod() {
    if (this.lineChart) {
      this.lineChart.destroy();
    }
    let datos = this.data.historial_temperatura
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: Object.keys(datos.historial),
        datasets: [
          {
            label: datos.tittle,
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: Object.values(datos.historial),
            spanGaps: false,
          }
        ]
      }
    });
  }

} // Elimina la instancia anterior