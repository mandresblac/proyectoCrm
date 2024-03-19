import { Component, OnInit } from '@angular/core';
import { config } from '../../../environments/configuracion/config';
import { UsuarioModel } from '../../core/models/usuario.model';
import { Subscription } from 'rxjs';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { AutenticacionService } from '../../services/autenticacion/autenticacion.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-oportunidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './oportunidades.component.html',
  styleUrl: './oportunidades.component.css'
})
export class OportunidadesComponent implements OnInit {
// Variables
usuarioSubscription: Subscription;
usuarios: UsuarioModel[] = [];
oportunidades = config.oportunidades;
usuarioLogin: UsuarioModel;

constructor(
    private usuarioService: UsuarioService, 
    private autenticacionService: AutenticacionService ) {}

ngOnInit(): void {
    this.usuarioLogin = this.autenticacionService.usuario;
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.usuarioSubscription = this.usuarioService.getUsuarios().subscribe((resp: any) => {
      this.usuarios = resp.usuarios;
    })
  };


  actualizarEstado(usuario: UsuarioModel) {
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
