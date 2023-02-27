import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartConfiguration } from 'chart.js';


@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class GraficoLineasComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        const data = {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
            datasets: [
                {
                    label: 'Ventas',
                    data: [12, 19, 3, 5, 2, 3, 30],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }
            ]
        };


        const options: ChartConfiguration['options'] = {
          responsive: true, // el gráfico se ajustará al tamaño del contenedor
          legend: {
            display: false // no mostrar la leyenda
          },
          scales: {
            xAxes: [{
              gridLines: {
                display: false // no mostrar las líneas de la cuadrícula en el eje x
              }
            }],
            yAxes: [{
              gridLines: {
                display: true // mostrar las líneas de la cuadrícula en el eje y
              },
              ticks: {
                beginAtZero: true // empezar el eje y en 0
              }
            }]
          }
        };
        


        const chart = new Chart('myChart', {
            type: 'line',
            data: data,
            options: options
        });
    }

}
