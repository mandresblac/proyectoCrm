import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { UsuarioModel } from '../../../core/models/usuario.model';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { AutenticacionService } from '../../../services/autenticacion/autenticacion.service';
import { SignUpComponent } from '../../../components/sign-up/sign-up.component';
import { PermisosDirective } from '../../../core/directives/permisos/permisos.directive';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { config } from '../../../../environments/configuracion/config';
import { ROUTER_APP } from '../../../core/enum/router-app.enum';

@Component({
  selector: 'app-ver-usuarios',
  standalone: true,
  imports: [FormsModule, RouterLink, SignUpComponent, PermisosDirective],
  templateUrl: './ver-usuarios.component.html',
  styleUrl: './ver-usuarios.component.css'
})
export class VerUsuariosComponent implements OnInit, OnDestroy {
  // Variables
  usuarioSubscription: Subscription;
  usuarios: UsuarioModel[] = [];
  usuarioLogin: UsuarioModel;
  roles = config.roles;

  constructor(
    private usuarioService: UsuarioService, 
    private autenticacionService: AutenticacionService,
    private router: Router ) {}

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

  agregarUsuarios() {
      this.router.navigateByUrl(`${ROUTER_APP.EDITAR_USUARIOS}/nuevo`);
    }

  editarUsuarios(id: string) {
    this.router.navigateByUrl(`${ROUTER_APP.EDITAR_USUARIOS}/${id}`);
  }
}
