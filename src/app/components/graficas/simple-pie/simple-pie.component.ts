import { Component, ViewChild } from '@angular/core';
import { ApexChart, ApexNonAxisChartSeries, ApexResponsive, ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { config } from '../../../../environments/configuracion/config';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-simple-pie',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgApexchartsModule, CommonModule],
  templateUrl: './simple-pie.component.html',
  styleUrl: './simple-pie.component.css'
})
export class SimplePieComponent {
  @ViewChild("chart", { static: false }) chart: ChartComponent;


  oportunidades = config.oportunidades;
  chartOptions: ChartOptions; 
  
  constructor() {}

  ngOnInit(): void {
    console.log(this.oportunidades)
    this.chartOptions = {
      series: [44, 55, 34, 43],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Perdida", "Ganada", "En proceso", "Cerrada"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        },
        {
          breakpoint: 1600,
          options: {
            chart: {
              width: 400
            },
            legend: {
              position: "bottom"
            }
          }
        },
      ]
    };
  }
}
