import { AutenticacionService } from './../../services/autenticacion/autenticacion.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    private formBuilder: FormBuilder,
    private autenticacionService: AutenticacionService
    ) {}

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
      login: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(5)]],
    });
  }

  get login() {
    return this.loginForm.get("login")
  }

  get password() {
    return this.loginForm.get("password")
  }

  realizoLogin() {
    console.log("Realizo login", this.loginForm)
  }

}
