import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { VerClientesComponent } from '../ver-clientes/ver-clientes.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ServiciosComponent } from '../servicios/servicios.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, VerClientesComponent, FooterComponent, RouterLink, ServiciosComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
