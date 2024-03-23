import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { UsuarioModel } from '../../../core/models/usuario.model';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioInterface } from '../../../core/interfaces/usuario.interface';
import { config } from '../../../../environments/configuracion/config';
import { PermisosDirective } from '../../../core/directives/permisos/permisos.directive';

@Component({
  selector: 'app-editar-usuarios',
  standalone: true,
  imports: [FormsModule, RouterLink, ReactiveFormsModule, PermisosDirective],
  templateUrl: './editar-usuarios.component.html',
  styleUrl: './editar-usuarios.component.css'
})
export class EditarUsuariosComponent implements OnInit {
  usuarioSeleccionado: UsuarioModel;
  usuarios: UsuarioModel[] = [];
  roles = config.roles;

  usuarioForm = new FormGroup({
    // Validaciones del formulario
    nombre: new FormControl("",Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    tipoDocumento: new FormControl('', [Validators.required]),
    numeroDocumento: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rol: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
  });

  constructor(
    private usuarioService: UsuarioService,
    private activateRoute: ActivatedRoute,
    private router: Router
    
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({id}) => {
      console.log("id del usuario", id);
      this.buscarUsuario(id);
    })
  }


  actualizarUsuario() {
    const dataActualizada: UsuarioInterface = {
      _id: this.usuarioSeleccionado._id || "",
      nombre: this.usuarioForm.value.nombre || "",
      email: this.usuarioForm.value.email || "",
      tipoDocumento: this.usuarioForm.value.tipoDocumento || "",
      numeroDocumento: this.usuarioForm.value.numeroDocumento || "",
      rol: this.usuarioForm.value.rol || "",
      telefono: this.usuarioForm.value.telefono || "",
      direccion: this.usuarioForm.value.direccion || "",
      oportunidades: this.usuarioForm.value.rol || "" // corregir
    };

    this.usuarioService.actualizarUnUsuario(dataActualizada).subscribe({
      next: (resp: any) => {
        Swal.fire(
          'Usuario Actualizado',
          `Se actualizó el usuario ${resp.usuario.nombre}`,
          'success'
        );

          this.router.navigateByUrl("dashboard/usuarios")
      },

      error: (error: any) => {
        const errors = error?.error?.errors;
        const errorList: string[] = [];

        if (errors) {
          Object.entries(errors).forEach(([key, value]: [string, any]) => {
            if (value && value['msg']) {
              errorList.push('* ' + value['msg'] + '<br>');
            }
          });
        }

        Swal.fire({
          title: 'Error al actualizar el usuario',
          icon: 'error',
          html: `${errorList.length ? errorList.join('') : error.error.msg}`,
        });
      },
    });
  }

  buscarUsuario(id: string) {
    if (id !== 'nuevo') {
      this.usuarioService.getUnUsuario(id).subscribe({
        next: (resp: any) => {
          const {
            nombre,
            direccion,
            telefono,
            email,
            tipoDocumento,
            numeroDocumento,
            password,
            rol,
          } = resp.usuarios;

          this.usuarioSeleccionado = resp.usuarios;
          console.log(resp);

          this.usuarioForm.setValue({
            nombre: this.usuarioSeleccionado.nombre,
            email: this.usuarioSeleccionado.email,
            direccion: this.usuarioSeleccionado.direccion || "",
            telefono: this.usuarioSeleccionado.telefono,
            tipoDocumento: this.usuarioSeleccionado.tipoDocumento,
            numeroDocumento: this.usuarioSeleccionado.numeroDocumento,
            password: this.usuarioSeleccionado.password || "",
            rol: this.usuarioSeleccionado.rol || "",
    
          });
        },

        error: (error: any) => {
          const errors = error?.error?.errors;
          const errorList: string[] = [];

          if (errors) {
            Object.entries(errors).forEach(([key, value]: [string, any]) => {
              if (value && value['msg']) {
                errorList.push('* ' + value['msg'] + '<br>');
              }
            });
          }

          Swal.fire({
            title: 'Error al buscar el usuario',
            icon: 'error',
            html: `${errorList.length ? errorList.join('') : error.error.msg}`,
          });
        },
      });
    }
  }

  retrocederPagina() {
    this.router.navigateByUrl("dashboard/usuarios")
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
