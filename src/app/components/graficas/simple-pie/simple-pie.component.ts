import { OPORTUNIDADES } from './../../../core/enum/oportunidades.enum';
import { Component, Input, ViewChild } from '@angular/core';
import { ApexChart, ApexNonAxisChartSeries, ApexResponsive, ChartComponent, NgApexchartsModule } from "ng-apexcharts";
import { config } from '../../../../environments/configuracion/config';



export type ChartOptions = {
  series: any;
  chart: any;
  responsive: any;
  labels: any;
};

@Component({
  selector: 'app-simple-pie',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './simple-pie.component.html',
  styleUrl: './simple-pie.component.css'
})
export class SimplePieComponent {
  
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  oportunidades = config.oportunidades;


  @Input() data: number[] = [];
  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      series: this.data,
      chart: {
        width: 380,
        type: "pie"
      },
      labels: [OPORTUNIDADES.PERDIDA, OPORTUNIDADES.GANADA, OPORTUNIDADES.EN_PROCESO, OPORTUNIDADES.CERRADA],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 320
            },
            legend: {
              position: "bottom"
            }
          }
        },
        {
          breakpoint: 1440,
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
