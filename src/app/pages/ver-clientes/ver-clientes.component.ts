import { SignUpComponent } from './../../components/sign-up/sign-up.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { UsuarioModel } from '../../core/models/usuario.model';
import { PermisosDirective } from '../../core/directives/permisos/permisos.directive';
import { Subscription } from 'rxjs';
import { AutenticacionService } from '../../services/autenticacion/autenticacion.service';
import Swal from 'sweetalert2';
import { config } from '../../../environments/configuracion/config';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ver-clientes',
  standalone: true,
  imports: [FormsModule, RouterLink, SignUpComponent, PermisosDirective],
  templateUrl: './ver-clientes.component.html',
  styleUrl: './ver-clientes.component.css'
})
export class VerClientesComponent implements OnInit, OnDestroy {

  // Variables
  usuarioSubscription: Subscription;
  usuarios: UsuarioModel[] = [];
  usuarioLogin: UsuarioModel;
  roles = config.roles;

  constructor(
    private usuarioService: UsuarioService, 
    private autenticacionService: AutenticacionService ) {}

  ngOnInit(): void {
    this.usuarioLogin = this.autenticacionService.usuario;
    this.cargarUsuarios();
  }

  // Destruye todas las suscripciones existentes en la aplicación
  ngOnDestroy(): void {
    this.usuarioSubscription?.unsubscribe();
  }

  cargarUsuarios() {
    this.usuarioSubscription = this.usuarioService.getUsuarios().subscribe((resp: any) => {
      this.usuarios = resp.usuarios;
    })
  };

  eliminarUsuario(id: string) {
    if (id === this.usuarioLogin._id) {
      Swal.fire("Error", "No se puede eliminar este usuario", "error")  
    } else {
      this.usuarioService.eliminarUnUsuario(id).subscribe((resp: any) => {
      this.cargarUsuarios();
      Swal.fire("Eliminado", `Se elimino el usuario ${resp.usuario.nombre}`, "success");
    });
    }
  }
  
  actualizarRol(usuario: UsuarioModel) {
    this.usuarioService.actualizarUnUsuario(usuario).subscribe((resp: any) => {
      Swal.fire(
        'Actualizado',
        `Se actualizó el usuario ${resp.usuario.nombre}`,
        'success'
      );
      console.log(resp);
    });
  }
}
