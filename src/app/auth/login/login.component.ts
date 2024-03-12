import { AutenticacionService } from './../../services/autenticacion/autenticacion.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    // Aqui inyectamos
    private formBuilder: FormBuilder,
    private autenticacionService: AutenticacionService,
    private router: Router
    ) {}

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(5)]],
    });
  }

  get email() {
    return this.loginForm.get("email")
  }

  get password() {
    return this.loginForm.get("password")
  }

  realizoLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    const data = this.loginForm.value;

    this.autenticacionService.login(data).subscribe({
      next: (resp: any) => {
        if (resp && resp.usuario) {
          const { nombre, login, email } = resp.usuario;

          // Modal de la libreria sweetalert2
          Swal.fire({
            html: `Bienvenido ${nombre}`
          }).then(() => {
            this.router.navigateByUrl("dashboard/clientes");
          });
        }
      },
      error: (error: any) => {
        console.error(error.error.msg);
      }
    });
  }
}
