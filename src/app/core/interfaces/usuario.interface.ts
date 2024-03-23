export interface UsuarioInterface {
  _id: string,
  nombre: string,
  telefono?: string,
  email: string,
  tipoDocumento: string,
  numeroDocumento: string,
  oportunidades: string,
  direccion?: string,
  rol?: string,
  estado?: boolean,
}

export interface crearUsuarioInterface {
  nombre: string,
  telefono?: string,
  email: string,
  tipoDocumento: string,
  numeroDocumento: string,
  direccion?: string,
  password?: string,
}