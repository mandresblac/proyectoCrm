import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { UsuarioInterface } from '../../core/interfaces/usuario.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) {}

  // Esto se cambia para obtener los usuarios en la tabla de ver cliente
  getUsuarios() {
    return this.httpClient.get(`${base_url}/usuario`);
  }

  crearUsuarios(usuario: UsuarioInterface) {
    return this.httpClient.post(`${base_url}/usuario`, usuario);
  }
}
