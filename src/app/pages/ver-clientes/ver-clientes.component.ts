import { ClientesService } from './../../services/clientes/clientes.service';
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

  constructor(private clienteService: ClientesService ) {}

  ngOnInit() {
    this.clienteService.getClientes().subscribe((data: any) => {
      console.log(data);

      this.misClientes = data.clientes;
    });
  }

  eliminarCliente(idCliente: number): void {
    this.misClientes = this.misClientes.filter(
      cliente => cliente._id !== idCliente
    );

    console.log("Eliminar", this.misClientes)
  }

  agregarCliente() {
    // this.clienteService.crearClientes({data: "cliente"}).subscribe();

    this.misClientes.push({
      _id: 2,
      nombre: "Maria",
      direccion: "Carrera 25",
      telefono: "2354793",
      email: "correo12@gmail.com",
      tipoDocumento: "Pasaporte",
      numeroDocumento: "Br2584",
      estado: true,
    });
  }
}
