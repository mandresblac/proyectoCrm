import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip, 
  NgApexchartsModule} from 'ng-apexcharts';

export type ChartOptions = {
  series: any;
  chart: any;
  dataLabels: any;
  plotOptions: any;
  yaxis: any;
  xaxis: any;
  fill: any;
  tooltip: any;
  stroke: any;
  legend: any;
  responsive: any;
};

@Component({
  selector: 'app-conexiones',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './conexiones.component.html',
  styleUrl: './conexiones.component.css'
})
export class ConexionesComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    
  }
  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: "Personas",
          data: [44, 55, 57, 56, 61, 58, 14, 60, 50, 22, 35, 40]
        }
      ],
      chart: {
        type: "bar",
        width: 500,
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Ene",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dic",
        ]
      },
      yaxis: {
        title: {
          text: "No personas"
        },
        categories: ["10"]
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val: string) {
            return  val;
          }
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 260
            }
          }
        },
        {
          breakpoint: 1440,
          options: {
            chart: {
              width: 500
            }
          }
        },
      ]
    };
  }
}
