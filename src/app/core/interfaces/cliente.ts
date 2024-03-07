export interface Cliente {
  _id: number, // Parametro de solo lectura
  nombre: string,
  direccion: string,
  telefono: string,
  email: string,
  tipoDocumento: string,
  numeroDocumento: string,
  estado: boolean
}
