
import { Component, OnInit, ViewChild } from '@angular/core';
import { SimplePieComponent } from '../../components/graficas/simple-pie/simple-pie.component';

@Component({
  selector: 'app-informes',
  standalone: true,
  imports: [SimplePieComponent],
  templateUrl: './informes.component.html',
  styleUrl: './informes.component.css'
})
export class InformesComponent {
  
}
