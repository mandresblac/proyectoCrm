import { SignUpComponent } from './../../components/sign-up/sign-up.component';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../core/interfaces/cliente';

@Component({
  selector: 'app-ver-clientes',
  standalone: true,
  imports: [SignUpComponent],
  templateUrl: './ver-clientes.component.html',
  styleUrl: './ver-clientes.component.css'
})
export class VerClientesComponent implements OnInit {

  misClientes: Cliente[] = [];

  ngOnInit() {
    this.misClientes.push(
      {
        id: 1,
        nombre: "Juan Perez",
        direccion: "Carrera 58 # 13-22",
        telefono: "3 124578910",
        email: "micorreo@gmail.com",
        tipoDocumento: "Cedula ciudadania",
        numeroDocumento: "42879650",
        password: "Jp5792",
        estado: true
      },
      {
        id: 2,
        nombre: "Maria Torre",
        direccion: "Calle 26 # 80-04",
        telefono: "31802529874",
        email: "micorreo@gmail.com",
        tipoDocumento: "Pasaporte",
        numeroDocumento: "9671235",
        password: "Mt8200",
        estado: false
      },
      {
        id: 3,
        nombre: "Carolina Santamaria",
        direccion: "Carrera 24 # 57-82",
        telefono: "311 58929741",
        email: "micorreo@gmail.com",
        tipoDocumento: "Cedula de extranjeria",
        numeroDocumento: "96742058",
        password: "Cs9708",
        estado: true
      },
      
    );

    // Iteracion de clientes
      this.misClientes.forEach((cliente) => {
        console.log("Mis clientes", cliente);
      });
  }
}
