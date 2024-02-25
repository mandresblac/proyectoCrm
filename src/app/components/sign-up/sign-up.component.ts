import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  
  contactoForm = new FormGroup({
    // Validaciones del formulario
    nombre: new FormControl("", Validators.required),
    direccion: new FormControl("", Validators.required),
    telefono: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.email, Validators.required]),
    tipoDocumento: new FormControl("", Validators.required),
    numeroDocumento: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  enviarDatos() {    
    // Validación para resetear formulario después de enviar datos con .reset()
    if (this.contactoForm.valid) {
      console.log("Envia formulario: ", this.contactoForm.value)
      this.contactoForm.reset(); // Resetea formulario
    }
  }
}
