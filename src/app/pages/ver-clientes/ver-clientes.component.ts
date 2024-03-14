import { SignUpComponent } from './../../components/sign-up/sign-up.component';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { UsuarioModel } from '../../core/models/usuario.model';
import { PermisosDirective } from '../../core/directives/permisos/permisos.directive';

@Component({
  selector: 'app-ver-clientes',
  standalone: true,
  imports: [SignUpComponent, PermisosDirective],
  templateUrl: './ver-clientes.component.html',
  styleUrl: './ver-clientes.component.css'
})
export class VerClientesComponent implements OnInit {

  misUsuarios: UsuarioModel[] = [];

  constructor(private usuarioService: UsuarioService ) {}

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe((data: any) => {
      console.log(data);

      this.misUsuarios = data.usuarios;
    });
  }

  eliminarCliente(idUsuario: string): void {
    this.misUsuarios = this.misUsuarios.filter(
      usuario => usuario._id !== idUsuario
    );

    console.log("Eliminar", this.misUsuarios)
  }

  agregarCliente() {
    // this.clienteService.crearClientes({data: "cliente"}).subscribe();

    // this.misClientes.push({
    //   _id: 2,
    //   nombre: "Maria",
    //   direccion: "Carrera 25",
    //   telefono: "2354793",
    //   email: "correo12@gmail.com",
    //   tipoDocumento: "Pasaporte",
    //   numeroDocumento: "Br2584",
    //   password: "123456",
    //   estado: true,
    // });
  }
}
