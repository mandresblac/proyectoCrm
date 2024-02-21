import { HeaderMainComponent } from './shared/header-main/header-main.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { initFlowbite } from 'flowbite';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderMainComponent, FooterComponent, InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectoCmr';

  ngOnInit(): void {
    initFlowbite();
  }
}
