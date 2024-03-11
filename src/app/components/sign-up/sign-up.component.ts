import { ClientesService } from './../../services/clientes/clientes.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClienteModel } from '../../core/models/cliente.model';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  
  clienteForm = new FormGroup({
    // Validaciones del formulario
    nombre: new FormControl("", Validators.required),
    direccion: new FormControl("", Validators.required),
    telefono: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.email, Validators.required]),
    tipoDocumento: new FormControl("", Validators.required),
    numeroDocumento: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  constructor(private clienteService: ClientesService){};

  crearCliente() {
    console.log("datos", this.clienteForm.value);

    // Trae los valores del formulario
    const  clienteNuevo = this.clienteForm.value;

    if (this.clienteForm.valid) {
      const data: ClienteModel = {
      nombre: clienteNuevo.nombre || "",
      telefono: clienteNuevo.telefono || "",
      email: clienteNuevo.email || "",
      tipoDocumento: clienteNuevo.tipoDocumento || "",
      numeroDocumento: clienteNuevo.numeroDocumento || "",
      direccion: clienteNuevo.direccion || "",
      };

      // Invocamos el servicio
      this.clienteService.crearClientes(data).subscribe({
        next: (resp: any) => {
          console.log("usiario creado", resp)
        },
        error: (error: any) => {
          console.log("Error al crear el cliente", error)
        } 
      })
    }
    

    // Resetea formulario despues de 3 segundos
    setTimeout(() => {
        this.clienteForm.reset(); // Resetea formulario
      }, 4000);
  }
};
