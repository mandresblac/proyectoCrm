import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { UsuarioModel } from '../../core/models/usuario.model';
import { UsuarioInterface } from '../../core/interfaces/usuario.interface';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  
  usuarioForm = new FormGroup({
    // Validaciones del formulario
    nombre: new FormControl("", Validators.required),
    direccion: new FormControl("", Validators.required),
    telefono: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.email, Validators.required]),
    tipoDocumento: new FormControl("", Validators.required),
    numeroDocumento: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  constructor(private usuarioService: UsuarioService){};

  crearCliente() {
    console.log("datos", this.usuarioForm.value);

    // Trae los valores del formulario
    const  usuarioNuevo = this.usuarioForm.value;

    if (this.usuarioForm.valid) {
      const data: UsuarioInterface = {
      nombre: usuarioNuevo.nombre || "",
      telefono: usuarioNuevo.telefono || "",
      email: usuarioNuevo.email || "",
      tipoDocumento: usuarioNuevo.tipoDocumento || "",
      numeroDocumento: usuarioNuevo.numeroDocumento || "",
      direccion: usuarioNuevo.direccion || "",
      password: usuarioNuevo.password || "",
      };

      // Invocamos el servicio
      this.usuarioService.crearUsuarios(data).subscribe({
        next: (resp: any) => {
          console.log("usiario creado", resp)
          this.usuarioForm.reset(); // Resetea formulario
        },
        error: (error: any) => {
          console.log("Error al crear el cliente", error)
        } 
      })
    }  
  }
};
