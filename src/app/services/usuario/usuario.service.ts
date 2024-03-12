import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteModel } from '../../core/models/cliente.model';
import { environment } from '../../../environments/environment';
import { UsuarioModel } from '../../core/models/usuario.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) {}

  // Esto se cambia para obtener los usuarios en la tabla de ver cliente
  getUusarios() {
    return this.httpClient.get(`${base_url}/usuarios`);
  }

  crearUsuarios(usuario: UsuarioModel) {
    return this.httpClient.post(`${base_url}/usuario`, usuario);
  }
}
