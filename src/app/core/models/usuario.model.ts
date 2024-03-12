export  class UsuarioModel {
  constructor(
    public nombre: string,
    public telefono: string,
    public email: string,
    public tipoDocumento: string,
    public numeroDocumento: string,
    public password: string,
    public rol?: string,
    public estado?: boolean,
    public createdAt?: Date,
    public readonly _id?: string,
    public direccion?: string,
  ) {}
}