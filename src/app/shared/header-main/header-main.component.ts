import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header-main',
  standalone: true,
  imports: [RouterLink,],
  templateUrl: './header-main.component.html',
  styleUrl: './header-main.component.css'
})
export class HeaderMainComponent {
  constructor(  
    private router: Router
  ) {}

   async login() {
    const { value: formValues } = await Swal.fire({
    title: "Log in",
    html: `
      <input type="email" id="swal-input1" class="swal2-input"
      placeholder="Email Address">
      <input type="password" id="swal-input2" class="swal2-input" placeholder="Password">
    `,
    focusConfirm: false,
    preConfirm: () => {
      return [
        (document.getElementById('identificador') as HTMLInputElement).value,
        (document.getElementById('identificador') as HTMLInputElement).value,
      ];
    }
  });
  if (formValues) {

    // Logica de redireccion a menu principal
    this.router.navigateByUrl("Falta crear menu")
    // Swal.fire(JSON.stringify(formValues));
    // console.log(formValues)
  }
 }
}
