import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { UsuarioInterface } from '../../core/interfaces/usuario.interface';
import { UsuarioModel } from '../../core/models/usuario.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) {}

  get token(): string { 
    return localStorage.getItem('token') || ""; 
  }

  get headers() {
    return {
      headers: {
        "x-token": this.token,
      }
    };
  };

  // Esto se cambia para obtener los usuarios en la tabla de ver cliente
  getUsuarios() {
    return this.httpClient.get(`${base_url}/usuario`, this.headers);
  }

  crearUsuarios(usuario: UsuarioInterface) {
    return this.httpClient.post(`${base_url}/usuario`, usuario, this.headers);
  }

  //TODO Completar la definicion de mi servicio
  actualizarUnUsuario(usuario: UsuarioModel) {
    return this.httpClient.put(`${base_url}/usuario/${usuario._id}`, usuario, this.headers);
  }

  eliminarUnUsuario(id: string) {
    return this.httpClient.delete(`${base_url}/usuario/${id}`, this.headers );
  }
}
