import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

// Constante global
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private httpClient: HttpClient) {}

  getClientes() {
    return this.httpClient.get(`${base_url}/cliente`);
  }

  crearClientes() {
    return this.httpClient.post(`${base_url}/cliente`, {});
  }
}
