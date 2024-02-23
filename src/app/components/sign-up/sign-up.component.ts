import { Component } from '@angular/core';
import { VerClientesComponent } from '../../pages/ver-clientes/ver-clientes.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [VerClientesComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

}
