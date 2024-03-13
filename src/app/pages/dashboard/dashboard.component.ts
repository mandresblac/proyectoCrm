import { AutenticacionService } from './../../services/autenticacion/autenticacion.service';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { VerClientesComponent } from '../ver-clientes/ver-clientes.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ServiciosComponent } from '../servicios/servicios.component';
import { ROUTER_APP } from '../../core/enum/router-app.enum';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, VerClientesComponent, FooterComponent, RouterLink, ServiciosComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  autenticacionService = inject(AutenticacionService)

  // Trae los enum
  get ROUTER_APP() {
    return ROUTER_APP
  }

  cerrarSesion() {
    this.autenticacionService.logout();
  }
}
