import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header-main',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './header-main.component.html',
  styleUrl: './header-main.component.css'
})
export class HeaderMainComponent {
  constructor(  
    private router: Router
  ) {}

   async login() {
  //   const { value: formValues } = await Swal.fire({
  //   title: "Log in",
  //   html: `
  //     <input type="email" id="email" class="swal2-input mx-3 rounded-md"
  //     placeholder="Email Address" >
  //     <input type="password" id="password" class="swal2-input mx-3 rounded-md" placeholder="Password" >
  //   `,
  //   focusConfirm: false,
  //   preConfirm: () => {
  //     return [
  //       (document.getElementById('email') as HTMLInputElement).value,
  //       (document.getElementById('password') as HTMLInputElement).value,
  //     ];
  //   }
  // });
  // if (formValues) {

  //   // Logica de redireccion a menu principal
  //   this.router.navigateByUrl("dashboard");
  //   // Swal.fire(JSON.stringify(formValues));
  //   // console.log(formValues)
  // }
 }
}
