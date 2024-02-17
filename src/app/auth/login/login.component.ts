import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 /* login() {
  const { value: formValues } = await Swal.fire({
  title: "Multiple inputs",
  html: `
    <input type="email" id="swal-input1" class="swal2-input">
    <input type="password" id="swal-input2" class="swal2-input">
  `,
  focusConfirm: false,
  preConfirm: () => {
    return [
      document.getElementById("swal-input1").value,
      document.getElementById("swal-input2").value
    ];
  }
});
if (formValues) {
  Swal.fire(JSON.stringify(formValues));
  console.log(formValues)
}
 } */
}
