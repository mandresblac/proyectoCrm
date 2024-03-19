import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApexChart, ApexNonAxisChartSeries, ApexResponsive, NgApexchartsModule, ChartComponent } from 'ng-apexcharts';
import { config } from '../../../environments/configuracion/config';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-informes',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, NgApexchartsModule, CommonModule],
  templateUrl: './informes.component.html',
  styleUrl: './informes.component.css'
})
export class InformesComponent implements OnInit {
  @ViewChild("realTimeChart") chart: ChartComponent;

  oportunidades = config.oportunidades;
  chartOptions: ChartOptions; 
  
  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      series: [44, 55, 25, 43],
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
