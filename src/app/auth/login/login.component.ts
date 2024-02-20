import { Component } from '@angular/core';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
//  async login() {
//     const { value: formValues } = await Swal.fire({
//     title: "Multiple inputs",
//     html: `
//       <input type="email" id="swal-input1" class="swal2-input">
//       <input type="password" id="swal-input2" class="swal2-input">
//     `,
//     focusConfirm: false,
//     preConfirm: () => {
//       return [
//         (document.getElementById('identificador') as HTMLInputElement).value,
//         (document.getElementById('identificador') as HTMLInputElement).value,
//       ];
//     }
//   });
//   if (formValues) {
//     Swal.fire(JSON.stringify(formValues));
//     console.log(formValues)
//   }
//  }
}
