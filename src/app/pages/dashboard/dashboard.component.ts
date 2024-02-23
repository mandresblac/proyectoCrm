import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VerClientesComponent } from '../ver-clientes/ver-clientes.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, VerClientesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
}
