export  class UsuarioModel {
  constructor(
    public readonly _id: string,
    public nombre: string,
    public telefono: string,
    public email: string,
    public tipoDocumento: string,
    public numeroDocumento: string,
    public oportunidades: string,
    public password?: string,
    public rol?: string,
    public estado?: boolean,
    public createdAt?: Date,
    public direccion?: string,
  ) {}
}