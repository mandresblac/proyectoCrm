import { Component } from '@angular/core';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [SignUpComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
