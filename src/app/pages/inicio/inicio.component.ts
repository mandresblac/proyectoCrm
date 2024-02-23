import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { HeaderMainComponent } from "../../shared/header-main/header-main.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: [SignUpComponent, HeaderMainComponent, FooterComponent, RouterOutlet]
})
export class InicioComponent {

}
